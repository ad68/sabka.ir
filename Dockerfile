FROM node:20-alpine

ARG NEXT_PUBLIC_API_URL=https://api.tazminmashin.com/tazmin/tazmin-mashin/
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
