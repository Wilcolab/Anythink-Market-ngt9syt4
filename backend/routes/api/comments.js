/**
 * @module comments
 * @description API endpoints for managing comments.
 * 
 * @route GET /api/comments
 * @returns {Array<Object>} 200 - A list of all comments
 * @returns {Object} 500 - Error message
 * 
 * @route POST /api/comments
 * @param {Object} req.body - The comment to create
 * @param {string} req.body.content - The content of the comment
 * @param {string} req.body.author - The author of the comment
 * @returns {Object} 201 - The created comment
 * @returns {Object} 500 - Error message
 * 
 * @route GET /api/comments/:id
 * @param {string} req.params.id - The ID of the comment to retrieve
 * @returns {Object} 200 - The requested comment
 * @returns {Object} 404 - Comment not found
 * @returns {Object} 500 - Error message
 * 
 * @route PUT /api/comments/:id
 * @param {string} req.params.id - The ID of the comment to update
 * @param {Object} req.body - The updated comment data
 * @param {string} req.body.content - The updated content of the comment
 * @param {string} req.body.author - The updated author of the comment
 * @returns {Object} 200 - The updated comment
 * @returns {Object} 404 - Comment not found
 * @returns {Object} 500 - Error message
 * 
 * @route DELETE /api/comments/:id
 * @param {string} req.params.id - The ID of the comment to delete
 * @returns {Object} 200 - Success message
 * @returns {Object} 404 - Comment not found
 * @returns {Object} 500 - Error message
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot,
// Please implement the following API endpoints for managing comments:
// 1. GET /api/comments - Retrieve a list of all comments.
// 2. POST /api/comments - Create a new comment.
// 3. GET /api/comments/:id - Retrieve a specific comment by its ID.
// 4. PUT /api/comments/:id - Update a specific comment by its ID.
// 5. DELETE /api/comments/:id - Delete a specific comment by its ID.

// Each comment should have the following fields: 
// - content (string)
// - author (string)
// - createdAt (date, default to current date)

// Ensure proper error handling and response status codes for each endpoint.
router.get(
    "/",
    async (req, res) => {
        try {
            const comments = await Comment.find();
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

router.post(
    "/",
    async (req, res) => {
        try {
            const comment = new Comment({
                content: req.body.content,
                author: req.body.author,
                createdAt: new Date()
            });
            await comment.save();
            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

router.get(
    "/:id",
    async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) {
                return res.status(404).json({ message: "Comment not found" });
            }
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

router.put(
    "/:id",
    async (req, res) => {
        try {
            const comment = await Comment.findByIdAndUpdate(
                req.params.id,
                { content: req.body.content, author: req.body.author },
                { new: true }
            );
            if (!comment) {
                return res.status(404).json({ message: "Comment not found" });
            }
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);
// add another endpoint for deleting a comment

// delete a comment by id
router.delete(
    "/:id",
    async (req, res) => {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.id);
            if (!comment) {
                return res.status(404).json({ message: "Comment not found" });
            }
            res.status(200).json({ message: "Comment deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);
