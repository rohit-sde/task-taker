FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 5064
CMD ["nginx", "-g", "daemon off;"]

# docker build -t task-taker-prod .
# docker run -it --rm --name task-taker-prod -p 5064:80 task-taker-prod
# docker build -t task-taker-prod . && docker run -it --rm --name task-taker-prod -p 5064:80 task-taker-prod



