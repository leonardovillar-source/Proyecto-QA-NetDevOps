FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --progress=false
COPY server.js .
EXPOSE 80
CMD ["node", "server.js"]