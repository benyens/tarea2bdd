/*
  Warnings:

  - The primary key for the `correos_favoritos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_correo_favorito` on the `correos_favoritos` table. All the data in the column will be lost.
  - Added the required column `correoId` to the `correos_favoritos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `correos_favoritos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "correos_favoritos" DROP CONSTRAINT "correos_favoritos_id_correo_favorito_fkey";

-- AlterTable
ALTER TABLE "correos_favoritos" DROP CONSTRAINT "correos_favoritos_pkey",
DROP COLUMN "id_correo_favorito",
ADD COLUMN     "correoId" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "usuarioId" TEXT NOT NULL,
ADD CONSTRAINT "correos_favoritos_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "correos_favoritos" ADD CONSTRAINT "correos_favoritos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correos_favoritos" ADD CONSTRAINT "correos_favoritos_correoId_fkey" FOREIGN KEY ("correoId") REFERENCES "correos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
