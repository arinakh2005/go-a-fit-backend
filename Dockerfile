# Specify Node Version and Image
FROM node:20.11.1 AS development

# Specify the working dir
WORKDIR /home/src/app

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm i --force
RUN npm run build

EXPOSE 3000

FROM node:20.11.1 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/src/app

COPY --from=development /home/src/app/ .

EXPOSE 3000

CMD ["node", "dist/main"]
