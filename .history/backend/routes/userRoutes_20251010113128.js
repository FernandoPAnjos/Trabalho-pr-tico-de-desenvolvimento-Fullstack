import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.get("/search", UserController.searchUsers);

router.post("/", UserController.createUser);

router.delete("/:id", UserController.deleteUser);

export default router;