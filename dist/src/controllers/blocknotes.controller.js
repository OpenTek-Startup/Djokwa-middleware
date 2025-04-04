"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlockNote = exports.updateBlockNote = exports.createBlockNote = exports.getBlockNoteById = exports.getAllBlockNotes = void 0;
const client_1 = require("@prisma/client");
const blocknotes_validator_1 = require("../valdators/blocknotes.validator");
const class_validator_1 = require("class-validator");
const prisma = new client_1.PrismaClient();
const getAllBlockNotes = async (req, res) => {
    try {
        const blockNotes = await prisma.blockNote.findMany();
        res.status(200).json(blockNotes);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch block notes' });
    }
};
exports.getAllBlockNotes = getAllBlockNotes;
const getBlockNoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const blockNote = await prisma.blockNote.findUnique({
            where: { Id: Number(id) },
        });
        if (!blockNote)
            return res.status(404).json({ error: 'BlockNote not found' });
        res.status(200).json(blockNote);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch block note' });
    }
};
exports.getBlockNoteById = getBlockNoteById;
const createBlockNote = async (req, res) => {
    try {
        const blocknoteData = req.body;
        const createBlocknoteDto = new blocknotes_validator_1.CreateBlocknoteDto();
        Object.assign(createBlocknoteDto, blocknoteData);
        const errors = await (0, class_validator_1.validate)(exports.createBlockNote);
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
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create block note' });
        console.log(error);
    }
};
exports.createBlockNote = createBlockNote;
const updateBlockNote = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        // Instantiate and populate the DTO
        const updateBlocknoteDto = new blocknotes_validator_1.UpdateBlocknoteDto();
        Object.assign(updateBlocknoteDto, updateData);
        // Validate the DTO
        const errors = await (0, class_validator_1.validate)(updateBlocknoteDto);
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
            where: { Id: Number(id) },
            data: updateData, // Spread the update data directly
        });
        res.status(200).json(updatedBlockNote);
    }
    catch (error) {
        // Prisma-specific error handling (optional)
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Block note not found' });
        }
        res.status(500).json({ error: 'Failed to update block note' });
    }
};
exports.updateBlockNote = updateBlockNote;
const deleteBlockNote = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.blockNote.delete({ where: { Id: Number(id) } });
        res.status(204).send({ message: 'Block note deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete block note' });
        console.log(error);
    }
};
exports.deleteBlockNote = deleteBlockNote;
