const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
} = require("../Controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
