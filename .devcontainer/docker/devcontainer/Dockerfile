FROM node:22.4-alpine

COPY "./root" "/root/"

RUN apk add --no-cache curl
RUN apk add --no-cache fish
RUN apk add --no-cache git
RUN apk add --no-cache openssh
RUN apk add --no-cache shadow

RUN corepack enable pnpm

RUN chsh -s $(which fish)

CMD ["sleep", "infinity"]
