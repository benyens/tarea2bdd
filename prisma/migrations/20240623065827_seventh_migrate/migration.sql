/*
  Warnings:

  - You are about to drop the `direcciones_favoritas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `asunto` to the `correos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mensaje` to the `correos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "direcciones_favoritas" DROP CONSTRAINT "direcciones_favoritas_usuarioId_fkey";

-- AlterTable
ALTER TABLE "correos" ADD COLUMN     "asunto" TEXT NOT NULL,
ADD COLUMN     "es_favorito" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mensaje" TEXT NOT NULL;

-- DropTable
DROP TABLE "direcciones_favoritas";

-- CreateTable
CREATE TABLE "correos_favoritos" (
    "id_correo_favorito" SERIAL NOT NULL,
    "es_favorito" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "correos_favoritos_pkey" PRIMARY KEY ("id_correo_favorito")
);

-- AddForeignKey
ALTER TABLE "correos_favoritos" ADD CONSTRAINT "correos_favoritos_id_correo_favorito_fkey" FOREIGN KEY ("id_correo_favorito") REFERENCES "correos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
