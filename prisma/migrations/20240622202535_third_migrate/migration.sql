/*
  Warnings:

  - You are about to drop the column `destinario` on the `correos` table. All the data in the column will be lost.
  - You are about to drop the column `direccion_correo` on the `correos` table. All the data in the column will be lost.
  - The primary key for the `direcciones_bloqueadas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_correo` on the `direcciones_bloqueadas` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `direcciones_bloqueadas` table. All the data in the column will be lost.
  - The primary key for the `direcciones_favoritas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_correo` on the `direcciones_favoritas` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `direcciones_favoritas` table. All the data in the column will be lost.
  - Added the required column `destinatarioId` to the `correos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remitenteId` to the `correos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion_bloqueada` to the `direcciones_bloqueadas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `direcciones_bloqueadas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion_favorita` to the `direcciones_favoritas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `direcciones_favoritas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "direcciones_bloqueadas" DROP CONSTRAINT "direcciones_bloqueadas_id_correo_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_bloqueadas" DROP CONSTRAINT "direcciones_bloqueadas_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_favoritas" DROP CONSTRAINT "direcciones_favoritas_id_correo_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_favoritas" DROP CONSTRAINT "direcciones_favoritas_id_usuario_fkey";

-- DropIndex
DROP INDEX "correos_destinario_key";

-- DropIndex
DROP INDEX "correos_direccion_correo_key";

-- AlterTable
ALTER TABLE "correos" DROP COLUMN "destinario",
DROP COLUMN "direccion_correo",
ADD COLUMN     "destinatarioId" INTEGER NOT NULL,
ADD COLUMN     "remitenteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "direcciones_bloqueadas" DROP CONSTRAINT "direcciones_bloqueadas_pkey",
DROP COLUMN "id_correo",
DROP COLUMN "id_usuario",
ADD COLUMN     "direccion_bloqueada" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "usuarioId" INTEGER NOT NULL,
ADD CONSTRAINT "direcciones_bloqueadas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "direcciones_favoritas" DROP CONSTRAINT "direcciones_favoritas_pkey",
DROP COLUMN "id_correo",
DROP COLUMN "id_usuario",
ADD COLUMN     "direccion_favorita" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "usuarioId" INTEGER NOT NULL,
ADD CONSTRAINT "direcciones_favoritas_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_remitenteId_fkey" FOREIGN KEY ("remitenteId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_favoritas" ADD CONSTRAINT "direcciones_favoritas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_bloqueadas" ADD CONSTRAINT "direcciones_bloqueadas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
