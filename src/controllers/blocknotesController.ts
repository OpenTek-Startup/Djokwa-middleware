import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAllBlockNotes = async (req: Request, res: Response) => {
  try {
    const blockNotes = await prisma.blockNote.findMany();
    res.status(200).json(blockNotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch block notes' });
  }
};

export const getBlockNoteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blockNote = await prisma.blockNote.findUnique({ where: { id: Number(id) } });
    if (!blockNote) return res.status(404).json({ error: 'BlockNote not found' });
    res.status(200).json(blockNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch block note' });
  }
};

export const createBlockNote = async (req: Request, res: Response) => {
  const { task, isComplete, note, title } = req.body;
  try {
    const newBlockNote = await prisma.blockNote.create({
      data: { task, isComplete, note, title },
    });
    res.status(201).json(newBlockNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create block note' });
  }
};

export const updateBlockNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { task, isComplete, note, title } = req.body;
  try {
    const updatedBlockNote = await prisma.blockNote.update({
      where: { id: Number(id) },
      data: { task, isComplete, note, title },
    });
    res.status(200).json(updatedBlockNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update block note' });
  }
};

export const deleteBlockNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.blockNote.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete block note' });
  }
};
