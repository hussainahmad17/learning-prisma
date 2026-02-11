// Force Prisma to use the binary engine locally to avoid adapter requirements
process.env.PRISMA_CLIENT_ENGINE_TYPE = 'binary';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

module.exports = prisma;