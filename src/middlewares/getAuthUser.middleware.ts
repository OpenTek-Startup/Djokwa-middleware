import { PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface UserWithRoles {
  id: number;
  email: string;
  roles: {
    id: number;
    name: string;
  }[];
}

// Type guard to ensure user has user_role as an array
const hasUserRolesArray = (
  user: any
): user is { user_role: { roles: { id: number; name: string } }[] } => {
  return Array.isArray(user.user_role);
};

// Helper function to fetch user with roles based on a role string
export const getUserWithRoles = async (
  role: string,
  email: string
): Promise<UserWithRoles | null> => {
  try {
    // Adjust query according to role
    const user = await prisma.user.findUnique({
      where: { Email: email },
      include: {
        user_role: {
          include: {
            roles: true,
          },
        },
      },
    });

    // If the user exists and has user roles, map them into an array
    if (user && hasUserRolesArray(user)) {
      const roles = user.user_role.map((ur) => ({
        id: ur.roles.id,
        name: ur.roles.name,
      }));

      return {
        id: user.Id,
        email: user.Email,
        roles,
      };
    }

    return null;
  } catch (err) {
    console.error('Error fetching user with roles:', err);
    return null;
  }
};

// Middleware to fetch user data by role and email
export const authUserMiddleware = async (req: Request, res: Response) => {
  const { role, email } = req.body;

  if (!role || !email) {
    return res.status(400).json({ error: 'Role and email are required' });
  }

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
