const express = require("express");
const router = express.Router();

// get all accounts
router.get("/", (req, res) => {});

// get account by id
router.get("/:id", (req, res) => {});

// create account
router.post("/", (req, res) => {});

// update account by ID
router.put("/:id", (req, res) => {});

// delete account by id
router.delete("/:id", (req, res) => {});

module.exports = router;
