FROM node:16-alpine

WORKDIR /app

COPY frontend/package*.json ./

RUN ls -la /app/

RUN npm install

COPY frontend/. .

RUN npm run build

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]