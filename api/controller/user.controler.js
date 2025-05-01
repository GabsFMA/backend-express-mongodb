import userService from '../service/user.service.js';

const register = async (req, res) => {
    console.log("Registering user:", req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send({ message: 'Username, email, and password are required' });
    }

    try {
        const newUser = await userService.registerUser({ username, email, password });
        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error("Error registering user:", error.message);
        return res.status(400).send({ message: error.message });
    }
};

const login = async (req, res) => {
    console.log("Logging in user:", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' });
    }

    try {
        const { token, user } = await userService.loginUser({ email, password });
        return res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        console.error("Error logging in user:", error.message);
        return res.status(400).send({ message: error.message });
    }
};

export default { register, login };