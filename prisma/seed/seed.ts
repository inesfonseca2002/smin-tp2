import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const lojas = await prisma.loja.createMany({
    data: [
      {
        nome: "car rent porto",
        image:"https://lp-cms-production.imgix.net/2023-03/shutterstockRF_148234274.jpg",
        morada: "Rua da Estação 75, 4300-171 Porto",
        map: "https://cdn.discordapp.com/attachments/1019019692528111657/1180174662592909392/image.png?ex=657c764e&is=656a014e&hm=5f15899b1b970ec724fa1b20d335c72508cfc05c594716bb6518a54dd03fb5cc&",
        }
    ],
  });

  const carros = await prisma.carro.createMany({
    data: [
      {
        name: "BMW_x5",
        descrisao: "4 lugares quilometragem ilimitada/  2 malas  deposito cheio  combustivel = diesel /  ",
        dados: "6 anos / motor tipo 2 / tração dianteira / transmissão manual /",
        preco: "20",
        prec: "10",
        image: "https://www.automaistv.com.br/wp-content/uploads/2019/05/bmw_x5_xdrive40i_8.jpg",
      }
    ],
  });

  console.log('Seed concluído!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(1)
  });
