// src/controllers/NotificationController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import {
  CreateDataDto,
  UpdateDataDto,
} from '../valdators/notification.validator';
import { validate } from 'class-validator';
import { createStudent } from './student.controller';

const prisma = new PrismaClient();

export const createNotification = async (req: Request, res: Response) => {
  const { title, time, message, type } = req.body;
  try {
    //Validate the date
    const notifcationData = req.body;
    const createNotificationDto = new CreateDataDto();
    Object.assign(createNotificationDto, notifcationData);
    const errors = await validate(createNotification);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Invalid details',
        errors: errors,
      });
    }

    //create a new notification
    const Notification = await prisma.notification.create({
      data: {
        title: notifcationData.title,
        time: new Date(notifcationData.time),
        message: notifcationData.message,
        type: notifcationData.type,
      },
    });
    res.status(201).json(Notification);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
      error,
    });
  }
};

export const getNotifications = async (req: Request, res: Response) => {
  try {
    const Notifications = await prisma.notification.findMany();
    res.status(200).json(Notifications);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};

export const getNotificationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const Notification = await prisma.notification.findUnique({
      where: { Id: Number(id) },
    });
    if (!Notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }
    res.status(200).json(Notification);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};

export const updateNotification = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, time, message, type } = req.body;
  try {
    const updateNotification = req.body;
    const updateNotificationDto = new UpdateDataDto();
    Object.assign(updateNotificationDto, updateNotification);

    const errors = await validate(updateNotification);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors: errors,
      });
    }

    const updatedNotification = await prisma.notification.update({
      where: { Id: Number(id) },
      data: {
        title,
        time,
        message,
        type,
      },
    });
    res.status(200).json(updatedNotification);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};

export const deleteNotification = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.notification.delete({
      where: { Id: Number(id) },
    });
    res.status(204).json({ type: 'success', message: 'Account deleted' });
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};
