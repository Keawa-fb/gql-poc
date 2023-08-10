FROM node:18-alpine3.16 as builder

# Create app directory, this is in our contiainer/image
WORKDIR /invoice-service/src/app

# Install app dependencies
# Wildcard used to unsure both package.json and package-lock.json are copied
COPY package*.json .

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

RUN npm install

RUN npm run build

FROM node:18-alpine3.16

# https://notiz.dev/blog/prisma-migrate-deploy-with-docker
COPY --from=builder /invoice-service/src/app/node_modules ./node_modules
COPY --from=builder /invoice-service/src/app/package*.json ./
COPY --from=builder /invoice-service/src/app/dist ./dist
COPY --from=builder /invoice-service/src/app/prisma ./prisma

# Bundle app source
# TODO redundant?
COPY . .

EXPOSE 8081

# If you are building your code for production, maybe use the following
# RUN npm ci --only-production
CMD ["npm", "run", "start:migrate:dev"]