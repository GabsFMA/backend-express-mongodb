import express from 'express'

const router = express.Router();

router.post('/register', async(req, res) => {
    console.log("Registering user:");
    res.send({message: 'User registered successfully'});
})

export default router; 