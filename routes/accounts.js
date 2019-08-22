const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

async function validateAccountId(req, res, next) {
  const { id } = req.params;

  try {
    const [account] = await db
      .select("*")
      .from("accounts")
      .where({ id });

    if (account === undefined) {
      res.status(404).json({
        message: "invalid account id"
      });

      return;
    }

    req.account = account;
    next();
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
}

function validateAccount(req, res, next) {
  const { name, budget } = req.body;

  if (!name || !budget) {
    res.status(400).json({
      message: "Please provide name and budget"
    });
    return;
  }

  next();
}

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
router.get("/:id", validateAccountId, (req, res) => {
  const { account } = req;

  res.json({
    account
  });
});

// create account
router.post("/", (req, res) => {});

// update account by ID
router.put("/:id", (req, res) => {});

// delete account by id
router.delete("/:id", (req, res) => {});

module.exports = router;
