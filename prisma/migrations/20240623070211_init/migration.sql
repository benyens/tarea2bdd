-- CreateTable
CREATE TABLE "usuarios" (
    "correo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "bloqueado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("correo")
);

-- CreateTable
CREATE TABLE "correos" (
    "id" SERIAL NOT NULL,
    "remitenteId" TEXT NOT NULL,
    "destinatarioId" TEXT NOT NULL,
    "fecha_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "asunto" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "es_favorito" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "correos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "correos_favoritos" (
    "id_correo_favorito" SERIAL NOT NULL,
    "es_favorito" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "correos_favoritos_pkey" PRIMARY KEY ("id_correo_favorito")
);

-- CreateTable
CREATE TABLE "direcciones_bloqueadas" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "direccion_bloqueada" TEXT NOT NULL,

    CONSTRAINT "direcciones_bloqueadas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_remitenteId_fkey" FOREIGN KEY ("remitenteId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correos" ADD CONSTRAINT "correos_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correos_favoritos" ADD CONSTRAINT "correos_favoritos_id_correo_favorito_fkey" FOREIGN KEY ("id_correo_favorito") REFERENCES "correos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones_bloqueadas" ADD CONSTRAINT "direcciones_bloqueadas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("correo") ON DELETE RESTRICT ON UPDATE CASCADE;
