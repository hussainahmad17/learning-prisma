const prisma = require('../DB/db.config');

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const user = await prisma.user.create({
            data: { name, email, password }
        });
        return res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Failed to create user', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createUser };