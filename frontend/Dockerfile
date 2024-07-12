FROM node:16-alpine

WORKDIR /app

COPY . .

RUN ls -la /app/

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]