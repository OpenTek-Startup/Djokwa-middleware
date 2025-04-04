"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSchoolEvent = exports.updateSchoolEvent = exports.getSchoolEventById = exports.getAllSchoolEvents = exports.createSchoolEvent = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create a School Event
const createSchoolEvent = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create event' });
    }
};
exports.createSchoolEvent = createSchoolEvent;
// Get All School Events
const getAllSchoolEvents = async (req, res) => {
    try {
        const events = await prisma.schoolEvent.findMany();
        res.status(200).json(events);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve events' });
    }
};
exports.getAllSchoolEvents = getAllSchoolEvents;
// Get a Single School Event by ID
const getSchoolEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await prisma.schoolEvent.findUnique({
            where: { Id: Number(id) },
        });
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve event' });
    }
};
exports.getSchoolEventById = getSchoolEventById;
// Update a School Event
const updateSchoolEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { venue, organizer, date, description, fieldTrip } = req.body;
        const event = await prisma.schoolEvent.update({
            where: { Id: Number(id) },
            data: {
                venue,
                organizer,
                date: new Date(date),
                description,
                fieldTrip,
            },
        });
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update event' });
    }
};
exports.updateSchoolEvent = updateSchoolEvent;
// Delete a School Event
const deleteSchoolEvent = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.schoolEvent.delete({
            where: { Id: Number(id) },
        });
        res.status(200).json({ message: 'Event deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete event' });
    }
};
exports.deleteSchoolEvent = deleteSchoolEvent;
