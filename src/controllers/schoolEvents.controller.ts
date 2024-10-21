import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a School Event
export const createSchoolEvent = async (req: Request, res: Response) => {
  try {
    const { venue, organizer, date, description, fieldTrip } = req.body;

    const event = await prisma.schoolEvent.create({
      data: {
        venue,
        organizer,
        date: new Date(date),
        description,
        fieldTrip,
      },
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};

// Get All School Events
export const getAllSchoolEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.schoolEvent.findMany();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
};

// Get a Single School Event by ID
export const getSchoolEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await prisma.schoolEvent.findUnique({
      where: { Event_ID: Number(id) },
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve event' });
  }
};

// Update a School Event
export const updateSchoolEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { venue, organizer, date, description, fieldTrip } = req.body;

    const event = await prisma.schoolEvent.update({
      where: { Event_ID: Number(id) },
      data: {
        venue,
        organizer,
        date: new Date(date),
        description,
        fieldTrip,
      },
    });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update event' });
  }
};

// Delete a School Event
export const deleteSchoolEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.schoolEvent.delete({
      where: { Event_ID: Number(id) },
    });

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
};
