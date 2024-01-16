const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all LOJAS
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.loja.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}