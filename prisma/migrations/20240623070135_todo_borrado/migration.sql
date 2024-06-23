/*
  Warnings:

  - You are about to drop the `correos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `correos_favoritos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `direcciones_bloqueadas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "correos" DROP CONSTRAINT "correos_destinatarioId_fkey";

-- DropForeignKey
ALTER TABLE "correos" DROP CONSTRAINT "correos_remitenteId_fkey";

-- DropForeignKey
ALTER TABLE "correos_favoritos" DROP CONSTRAINT "correos_favoritos_id_correo_favorito_fkey";

-- DropForeignKey
ALTER TABLE "direcciones_bloqueadas" DROP CONSTRAINT "direcciones_bloqueadas_usuarioId_fkey";

-- DropTable
DROP TABLE "correos";

-- DropTable
DROP TABLE "correos_favoritos";

-- DropTable
DROP TABLE "direcciones_bloqueadas";

-- DropTable
DROP TABLE "usuarios";
