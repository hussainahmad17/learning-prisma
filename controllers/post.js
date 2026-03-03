const prisma = require('../DB/db.config');

const createPost = async (req, res) => {
    try {
        const { user_id, title, desc } = req.body;
        const post = await prisma.post.create({
            data: { user_id, title, desc }
        });
        return res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.error('Failed to create post', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createPost };