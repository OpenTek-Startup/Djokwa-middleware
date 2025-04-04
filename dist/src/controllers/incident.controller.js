"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncident = exports.updateIncident = exports.getIncidentById = exports.getIncidents = exports.createIncident = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createIncident = async (req, res) => {
    const { Incident_ID, Student_ID, place, witness, description, disciplinary_recomendation, } = req.body;
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
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.createIncident = createIncident;
const getIncidents = async (req, res) => {
    try {
        const incidents = await prisma.incident.findMany({
            include: { student: true },
        });
        res.status(200).json(incidents);
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.getIncidents = getIncidents;
const getIncidentById = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.getIncidentById = getIncidentById;
const updateIncident = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.updateIncident = updateIncident;
const deleteIncident = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.incident.delete({
            where: { Id: Number(id) },
        });
        res.status(204).json({ type: 'success', message: 'Account deleted' });
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.deleteIncident = deleteIncident;
