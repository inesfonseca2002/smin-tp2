const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const express = require('express')

const prisma = new PrismaClient()
const app = express()

app.use(cors());
app.use(express.json())

app.get('/carros', async (req, res) => {
    try {
      const carros = await prisma.Carro2.findMany({
        include: {
          lojas: {
            include: {
              loja: true,
            },
          },
        },
      });
  
      res.json(carros);
    } catch (error) {
      console.error('Erro ao obter carros:', error);
      res.status(500).json({ error: 'Erro ao obter carros.' });
    }
  });

  app.patch('/api/carros/:id/toggleFeito', async (req, res) => {
  const { id } = req.params;


  try {
    const carro = await prisma.carro.findUnique({
      where: { id: parseInt(id) },
    });

    if (!carro) {
      return res.status(404).json({ error: 'carro não encontrada.' });
    }
    const updatedcarro = await prisma.carro.update({
      where: { id: parseInt(id) },
    });

    res.json(updatedcarro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

app.use((req, res, next) => {
    res.status(404);
    return res.json({
        success: false,
        payload: null,
        message: `API SAYS: Endpoint not found for path: ${req.path}`,
    });
});

// #6
app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
)