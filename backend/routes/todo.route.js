import express from "express";
import {
  deleteTodo,
  getTodo,
  saveTodo,
} from "../controller/todo.controller.js";

const router = express.Router();

router.get("/getTodo", getTodo);
router.post("/saveTodo", saveTodo);
router.delete("/deleteTodo/:id", deleteTodo);

export default router;
