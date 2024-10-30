import { PrismaClient, Personnel, Teacher, Parent } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface UserWithRoles {
  // Structure of the user with roles based on Prisma schema
  id: number;
  email: string;
  roles: {
    id: number;
    name: string;
  }[];
}

// Type guard to check if user has user_roles
const hasUserRoles = (
  user: any
): user is { user_roles: { roles: { id: number; name: string } }[] } => {
  return Array.isArray(user.user_roles);
};

export const getUserWithRoles = async (
  role: string,
  email: string
): Promise<UserWithRoles | null> => {
  let user: Personnel | Teacher | Parent | null;
  try {
    switch (role) {
      case 'admin':
        user = await prisma.personnel.findUnique({
          where: { Email: email },
          include: {
            user_role: {
              include: {
                roles: true,
              },
            },
          },
        });
        break;
      case 'teacher':
        user = await prisma.teacher.findUnique({
          where: { Email: email },
          include: {
            user_role: {
              include: {
                roles: true,
              },
            },
          },
        });
        break;
      // case 'student':
      //   user = await prisma.student.findUnique({
      //     where: { ParentRelations: { Parent: { Email: email } } },
      //     include: {
      //       user_roles: {
      //         include: {
      //           roles: true,
      //         },
      //       },
      //     },
      //   });
      //   break;
      case 'parent':
        user = await prisma.parent.findUnique({
          where: { Email: email },
          include: {
            Relations: {
              include: {
                Student: {
                  include: {
                    user_role: {
                      include: {
                        roles: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });
        break;
      case 'staff':
        user = await prisma.personnel.findUnique({
          where: { Email: email },
          include: {
            user_role: {
              include: {
                roles: true,
              },
            },
          },
        });
        break;
      default:
        throw new Error('Invalid role');
    }

    if (user) {
      const roles = hasUserRoles(user)
        ? user.user_roles.map((ur) => ({
            id: ur.roles.id,
            name: ur.roles.name,
          }))
        : [];

      return {
        id: user.Id,
        email: user.Email,
        roles,
      };
    }
  } catch (err) {
    console.error('Error fetching user with roles:', err);
    return null;
  }

  return null;
};

export const authUserMiddleware = async (req: Request, res: Response) => {
  const { role, email } = req.body;

  try {
    const user = await getUserWithRoles(role, email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Invalid request';
    res.status(400).json({ error: errorMessage });
  }
};
