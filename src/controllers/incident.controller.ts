// src/controllers/incidentController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createIncident = async (req: Request, res: Response) => {
  const {
    Incident_ID,
    Student_ID,
    place,
    witness,
    description,
    disciplinary_recomendation,
  } = req.body;
  try {
    const incident = await prisma.incident.create({
      data: {
        Id: Incident_ID,
        Student_ID,
        place,
        witness,
        description: description || 'Pending',
        disciplinary_recomendation,
      },
    });
    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};

export const getIncidents = async (req: Request, res: Response) => {
  try {
    const incidents = await prisma.incident.findMany({
      include: { student: true },
    });
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};

export const getIncidentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const incident = await prisma.incident.findUnique({
      where: { Id: Number(id) },
      include: { student: true },
    });
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};

export const updateIncident = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, disciplinary_recomendation } = req.body;
  try {
    const updatedIncident = await prisma.incident.update({
      where: { Id: Number(id) },
      data: {
        description,
        disciplinary_recomendation,
      },
    });
    res.status(200).json(updatedIncident);
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'error.message',
    });
  }
};

export const deleteIncident = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.incident.delete({
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
