FROM node:20-alpine as build

# Create app directory
WORKDIR /opt/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install --legacy-peer-deps

# Copy app source
COPY . .

# ENVIRONMENTS
ARG APP_ENV
ENV NEXT_PUBLIC_APP_ENV=$APP_ENV

# Compile application
RUN npm run build

CMD [ "npm", "start"]

# Server startup PORT
ENV PORT 4000

FROM nginx:stable-alpine-slim

COPY --from=build /opt/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]