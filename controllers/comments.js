const prisma = require('../DB/db.config');

const createComments = async (req, res) => {
    try {
        const { user_id, post_id, comment } = req.body;

        const comments = await prisma.comments.create({
            data: { user_id, post_id, comment }
        });
        return res.status(201).json({ message: 'Comments created successfully', comments });
    } catch (error) {
        console.error('Failed to create comments', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


const showComments = async (req, res) => {
    try {
        const comments = await prisma.comments.findMany({
            include: {
                post: {
                    select: {
                        title: true,
                        desc: true,
                    }
                }
            }
        })
        return res.status(200).json({ message: 'Comments fetched successfully', comments });
    } catch (error) {
        console.error('Failed to fetch comments', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { createComments, showComments };