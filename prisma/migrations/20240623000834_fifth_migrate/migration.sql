/*
  Warnings:

  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `direccion_correo` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `nombre_usuario` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `correo` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "correos" DROP CONSTRAINT "correos_destinatarioId_fkey";

-- DropForeignKey
ALTER TABLE "correos" DROP CONSTRAINT "correos_remitenteId_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_bloqueadas" DROP CONSTRAINT "direcciones_bloqueadas_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_favoritas" DROP CONSTRAINT "direcciones_favoritas_usuarioId_fkey";

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "direccion_correo",
DROP COLUMN "nombre_usuario",
ADD COLUMN     "correo" TEXT NOT NULL,
ADD COLUMN     "nombre" TEXT NOT NULL,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("correo");

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_remitenteId_fkey" FOREIGN KEY ("remitenteId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_favoritas" ADD CONSTRAINT "direcciones_favoritas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_bloqueadas" ADD CONSTRAINT "direcciones_bloqueadas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;
