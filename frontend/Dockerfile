FROM node:16-alpine

WORKDIR /app

RUN ls -la /

RUN ls -la /frontend

COPY /workspace/frontend/package*.json ./

RUN ls -la /app/

RUN npm install

COPY /workspace/frontend/. .

RUN npm run build

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]