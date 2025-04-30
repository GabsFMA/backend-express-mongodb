import express from 'express'
import userController from '../controller/user.controler.js';

const router = express.Router();

router.post('/register', userController.register);

export default router; 