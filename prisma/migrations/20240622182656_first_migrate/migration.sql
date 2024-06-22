-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "direccion_correo" TEXT NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "bloqueado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "correos" (
    "id" SERIAL NOT NULL,
    "direccion_correo" TEXT NOT NULL,
    "fecha_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "correos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "temas_correo" (
    "id" SERIAL NOT NULL,
    "nombre_tema" TEXT NOT NULL,

    CONSTRAINT "temas_correo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plugins_correo" (
    "id" SERIAL NOT NULL,
    "nombre_plugin" TEXT NOT NULL,

    CONSTRAINT "plugins_correo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "direcciones_favoritas" (
    "id_usuario" INTEGER NOT NULL,
    "id_correo" INTEGER NOT NULL,

    CONSTRAINT "direcciones_favoritas_pkey" PRIMARY KEY ("id_usuario","id_correo")
);

-- CreateTable
CREATE TABLE "direcciones_bloqueadas" (
    "id_usuario" INTEGER NOT NULL,
    "id_correo" INTEGER NOT NULL,

    CONSTRAINT "direcciones_bloqueadas_pkey" PRIMARY KEY ("id_usuario","id_correo")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_direccion_correo_key" ON "usuarios"("direccion_correo");

-- CreateIndex
CREATE UNIQUE INDEX "correos_direccion_correo_key" ON "correos"("direccion_correo");

-- CreateIndex
CREATE UNIQUE INDEX "temas_correo_nombre_tema_key" ON "temas_correo"("nombre_tema");

-- CreateIndex
CREATE UNIQUE INDEX "plugins_correo_nombre_plugin_key" ON "plugins_correo"("nombre_plugin");

-- AddForeignKey
ALTER TABLE "direcciones_favoritas" ADD CONSTRAINT "direcciones_favoritas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_favoritas" ADD CONSTRAINT "direcciones_favoritas_id_correo_fkey" FOREIGN KEY ("id_correo") REFERENCES "correos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_bloqueadas" ADD CONSTRAINT "direcciones_bloqueadas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_bloqueadas" ADD CONSTRAINT "direcciones_bloqueadas_id_correo_fkey" FOREIGN KEY ("id_correo") REFERENCES "correos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
