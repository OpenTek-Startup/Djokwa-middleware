import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import {
  CreateBlocknoteDto,
  UpdateBlocknoteDto,
} from '../valdators/blocknotes.validator';
import { validate } from 'class-validator';

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
    const blockNote = await prisma.blockNote.findUnique({
      where: { id: Number(id) },
    });
    if (!blockNote)
      return res.status(404).json({ error: 'BlockNote not found' });
    res.status(200).json(blockNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch block note' });
  }
};

export const createBlockNote = async (req: Request, res: Response) => {
  try {
    const blocknoteData = req.body;

    const createBlocknoteDto = new CreateBlocknoteDto();
    Object.assign(createBlocknoteDto, blocknoteData);

    const errors = await validate(createBlockNote);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Failed to create',
      });
    }

    const newBlockNote = await prisma.blockNote.create({
      data: {
        task: blocknoteData.task,
        isComplete: blocknoteData.isComplete,
        note: blocknoteData.note,
        title: blocknoteData.title,
        deadline: blocknoteData.deadline,
      },
    });
    res.status(201).json(newBlockNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create block note' });
    console.log(error);
  }
};

export const updateBlockNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Instantiate and populate the DTO
    const updateBlocknoteDto = new UpdateBlocknoteDto();
    Object.assign(updateBlocknoteDto, updateData);

    // Validate the DTO
    const errors = await validate(updateBlocknoteDto);

    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors: errors.map((err) => ({
          property: err.property,
          constraints: err.constraints,
        })),
      });
    }

    // Update the block note in the database
    const updatedBlockNote = await prisma.blockNote.update({
      where: { id: Number(id) },
      data: updateData, // Spread the update data directly
    });

    res.status(200).json(updatedBlockNote);
  } catch (error: any) {
    // Prisma-specific error handling (optional)
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Block note not found' });
    }
    res.status(500).json({ error: 'Failed to update block note' });
  }
};

export const deleteBlockNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.blockNote.delete({ where: { id: Number(id) } });
    res.status(204).send({ message: 'Block note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete block note' });
    console.log(error);
  }
};
