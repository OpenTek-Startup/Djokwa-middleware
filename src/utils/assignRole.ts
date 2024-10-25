import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

const assignRole = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId, roleName } = req.body;

    const role = await prisma.roles.findUnique({
      where: {
        name: roleName,
      },
    });

    if (!role) {
      res.status(404).json({ message: `Role ${roleName} not found` });
      return;
    }

    try {
      switch (role.name) {
        case 'admin':
          await prisma.user_roles.upsert({
            where: { teacher_id: userId },
            create: { teacher_id: userId, role_id: role.Id },
            update: { role_id: role.Id },
          });
          break;

        case 'teacher':
          await prisma.user_roles.upsert({
            where: { teacher_id: userId },
            create: { teacher_id: userId, role_id: role.Id },
            update: { role_id: role.Id },
          });
          break;

        // case 'student':
        //   await prisma.user_roles.upsert({
        //     where: { student_id: userId },
        //     create: { student_id: userId, role_id: role.Id },
        //     update: { role_id: role.Id },
        //   });
        //   break;

        case 'staff':
          await prisma.user_roles.upsert({
            where: { staff_id: userId },
            create: { staff_id: userId, role_id: role.Id },
            update: { role_id: role.Id },
          });
          break;

        case 'parent':
          await prisma.user_roles.upsert({
            where: { student_id: userId },
            create: { student_id: userId, role_id: role.Id },
            update: { role_id: role.Id },
          });
          break;

        default:
          res.status(400).json({ message: `Unhandled role: ${roleName}` });
          return;
      }

      res
        .status(200)
        .json({ message: `Role ${roleName} assigned to user ${userId}` });
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
  }
);

export default assignRole;
