# Etapa 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY bun.lockb ./
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: serve estático
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
