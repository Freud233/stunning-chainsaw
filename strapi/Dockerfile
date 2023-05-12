FROM node:16
RUN apt-get update && apt-get install -y 
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build \
    && yarn cs import -y
EXPOSE 8888
CMD ["yarn", "develop"]
