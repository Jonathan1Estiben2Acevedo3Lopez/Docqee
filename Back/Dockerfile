FROM node:20-slim

WORKDIR /app

# OpenSSL requerido por Prisma. Python/build tools permiten compilar bcrypt
# si no se puede descargar el binario precompilado durante el deploy.
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Instalar dependencias
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

# Copiar fuente y compilar
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
