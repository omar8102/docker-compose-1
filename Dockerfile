# Usamos una imagen de Node ligera (versión Alpine)
FROM node:18-alpine

# Creamos y nos movemos a la carpeta de la app dentro del contenedor
WORKDIR /app

# Copiamos nuestro archivo index.js de la PC al contenedor
COPY index.js .
EXPOSE 3000
# El comando que se ejecuta al encender el contenedor
CMD ["node", "index.js"]