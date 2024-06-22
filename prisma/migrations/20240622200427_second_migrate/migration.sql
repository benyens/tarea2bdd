/*
  Warnings:

  - A unique constraint covering the columns `[destinario]` on the table `correos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `destinario` to the `correos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "correos" ADD COLUMN     "destinario" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "correos_destinario_key" ON "correos"("destinario");
