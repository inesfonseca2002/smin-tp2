/*
  Warnings:

  - You are about to drop the `Ingrediente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Receita` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ReceitaIngrediente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReceitaIngrediente" DROP CONSTRAINT "ReceitaIngrediente_ingredienteId_fkey";

-- DropForeignKey
ALTER TABLE "ReceitaIngrediente" DROP CONSTRAINT "ReceitaIngrediente_receitaId_fkey";

-- DropTable
DROP TABLE "Ingrediente";

-- DropTable
DROP TABLE "Receita";

-- DropTable
DROP TABLE "ReceitaIngrediente";

-- CreateTable
CREATE TABLE "carro" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descrisao" TEXT NOT NULL,
    "dados" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "prec" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "carro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loja" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "morada" TEXT NOT NULL,
    "map" TEXT NOT NULL,

    CONSTRAINT "loja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carroloja" (
    "carroId" INTEGER NOT NULL,
    "lojaid" INTEGER NOT NULL,

    CONSTRAINT "carroloja_pkey" PRIMARY KEY ("carroId","lojaid")
);

-- AddForeignKey
ALTER TABLE "carroloja" ADD CONSTRAINT "carroloja_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "carro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carroloja" ADD CONSTRAINT "carroloja_lojaid_fkey" FOREIGN KEY ("lojaid") REFERENCES "loja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
