const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

// get all accounts
router.get("/", async (_req, res) => {
  try {
    const accounts = await db.select("*").from("accounts");

    res.json({
      accounts
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});

// get account by id
router.get("/:id", (req, res) => {});

// create account
router.post("/", (req, res) => {});

// update account by ID
router.put("/:id", (req, res) => {});

// delete account by id
router.delete("/:id", (req, res) => {});

module.exports = router;
