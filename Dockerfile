# Usa una imagen base ligera de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye el proyecto Next.js (opcional si solo quieres dev mode)
RUN npm run build

# Expone el puerto en el que se ejecutará la app (Next usa 3000 por defecto)
EXPOSE 3000

# Comando por defecto (modo producción)
CMD ["npm", "run", "start"]
