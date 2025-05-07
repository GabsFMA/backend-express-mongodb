import taskService from '../services/task.service.js';

const createTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, description } = req.body;

    const newTask = await taskService.createTask({ title, description }, userId);
    return res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error.message);
    return res.status(400).json({ error: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await taskService.getAllTasks(userId);
    return res.status(200).json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error.message);
    return res.status(400).json({ error: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const userId = req.user.id;
    const taskId = req.params.id;

    const task = await taskService.getTasksById(taskId, userId);
    return res.status(200).json(task);
  } catch (error) {
    console.error('Error retrieving task:', error.message);
    return res.status(404).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const taskId = req.params.id;
    const data = req.body;

    const updatedTask = await taskService.updateTask(taskId, userId, data);
    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error.message);
    return res.status(400).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const taskId = req.params.id;

    const deletedTask = await taskService.deleteTask(taskId, userId);
    return res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (error) {
    console.error('Error deleting task:', error.message);
    return res.status(400).json({ error: error.message });
  }
};

export default {createTask, getAllTasks, getTaskById, updateTask, deleteTask};
