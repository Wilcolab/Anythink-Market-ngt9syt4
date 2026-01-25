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
