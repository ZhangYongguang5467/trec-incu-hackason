FROM golang:1.20

WORKDIR /app

COPY backend/go.mod .
COPY backend/go.sum .

RUN go mod download

COPY backend/. .

RUN go build -o main .

EXPOSE 80

CMD ["./main"]
