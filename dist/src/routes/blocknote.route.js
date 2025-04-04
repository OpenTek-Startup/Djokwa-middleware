"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blocknotes_controller_1 = require("../controllers/blocknotes.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: blocknotes
 *   description: Operations related to block notes
 */
/**
 * @swagger
 * paths:
 *    /api/blocknotes/all-blocknotes:
 *     get:
 *       tags: [blocknotes]
 *       summary: Retrieve all block notes
 *       responses:
 *         200:
 *           description: A list of all block notes
 *         500:
 *           description: Server error
 *
 *    /api/blocknotes/get-blocknote/{id}:
 *     get:
 *       tags: [blocknotes]
 *       summary: Retrieve a block note by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The ID of the block note to retrieve
 *           type: string
 *       responses:
 *         200:
 *           description: Block note retrieved successfully
 *         404:
 *           description: Block note not found
 *         500:
 *           description: Server error
 *
 *    /api/blocknotes/create:
 *     post:
 *       tags: [blocknotes]
 *       summary: Create a new block note
 *       parameters:
 *         - name: blockNote
 *           in: body
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *       responses:
 *         201:
 *           description: Block note created successfully
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 *
 *    /api/blocknotes/update/{id}:
 *     put:
 *       tags: [blocknotes]
 *       summary: Update a block note by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The ID of the block note to update
 *           type: string
 *         - name: blockNote
 *           in: body
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Block note updated successfully
 *         404:
 *           description: Block note not found
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 *
 *    /api/blocknotes/delete/{id}:
 *     delete:
 *       tags: [blocknotes]
 *       summary: Delete a block note by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The ID of the block note to delete
 *           type: string
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Block note deleted successfully
 *         404:
 *           description: Block note not found
 *         500:
 *           description: Server error
 */
router.get('/all-blocknotes', auth_middleware_1.authMiddleware, blocknotes_controller_1.getAllBlockNotes);
router.get('/get-blocknote/:id', auth_middleware_1.authMiddleware, blocknotes_controller_1.getBlockNoteById);
router.post('/create', auth_middleware_1.authMiddleware, blocknotes_controller_1.createBlockNote);
router.put('/update/:id', auth_middleware_1.authMiddleware, blocknotes_controller_1.updateBlockNote);
router.delete('/delete/:id', auth_middleware_1.authMiddleware, blocknotes_controller_1.deleteBlockNote);
exports.default = router;
