import express from 'express';
import taskController from '../controller/task.controller.js';
import authMiddleware from '../middleware/jwt.token.middleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;
