/*
  Warnings:

  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the `plugins_correo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `temas_correo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "correos" DROP CONSTRAINT "correos_destinatarioId_fkey";

-- DropForeignKey
ALTER TABLE "correos" DROP CONSTRAINT "correos_remitenteId_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_bloqueadas" DROP CONSTRAINT "direcciones_bloqueadas_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_favoritas" DROP CONSTRAINT "direcciones_favoritas_usuarioId_fkey";

-- DropIndex
DROP INDEX "usuarios_direccion_correo_key";

-- AlterTable
ALTER TABLE "correos" ALTER COLUMN "destinatarioId" SET DATA TYPE TEXT,
ALTER COLUMN "remitenteId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "direcciones_bloqueadas" ALTER COLUMN "usuarioId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "direcciones_favoritas" ALTER COLUMN "usuarioId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("direccion_correo");

-- DropTable
DROP TABLE "plugins_correo";

-- DropTable
DROP TABLE "temas_correo";

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_remitenteId_fkey" FOREIGN KEY ("remitenteId") REFERENCES "usuarios"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "usuarios"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_favoritas" ADD CONSTRAINT "direcciones_favoritas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_bloqueadas" ADD CONSTRAINT "direcciones_bloqueadas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;
