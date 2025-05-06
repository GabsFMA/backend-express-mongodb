import Tasks from '../models/task.model.js';
import jwt from 'jsonwebtoken';

const createTask = async ({title, description}, userId) => {
    const newTask = await Tasks.createTask({
        title, 
        description, 
        completed: false, 
        userId,
    });

    console.log(`[${new Date().toISOString()}] Task created for user ${userId}: ${title}`);
    return newTask;
};

const getAllTasks = async (userId) => {
    const tasks = await Tasks.find({userId});
    console.log(`[${new Date().toISOString()}] Retrieved tasks for user ${userId}`);
    return tasks;
}

const getTasksById = async (taskId, userId) => {
    const tasks = await Tasks.findOne({_id: taskId, userId})
    if(!tasks) throw new Error("Task not found");
    console.log(`[${new Date().toISOString()}] Retrieved task: ${taskId} for user ${userId}`);
    return tasks;
}

const updateTask = async (taskId, userId) => {
    const task = await Task.findOne({_id: taskId, userId}, data, {new: true});
    if(!task) throw new Error("Task not found or unauthorized");
    console.log(`[${new Date().toISOString()}] Upadate task: ${taskId} for user ${userId}`);
    return task;
}

const deleteTask = async(taskId, userId) => {
    const task = await Task.findOne({_id: taskId, userId});
    if(!task) throw new Erroe ("Task not found or unauthorized");
    console.log(`[${new Date().toISOString()}] Deleted task: ${taskId} for user ${userId}`);
    return task;
};

export default {createTask, updateTask, deleteTask, getTasksById, getAllTasks}

