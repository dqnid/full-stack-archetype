FROM node:21-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3016

# Start the NestJS application
CMD ["npm", "run", "start"]
