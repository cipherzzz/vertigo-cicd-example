FROM node:8 as native-build
COPY . .
RUN npm install
RUN npm run build

FROM node:carbon-alpine
WORKDIR /home/node/app
COPY --from=native-build /dist dist/
COPY --from=native-build /package.json .
COPY --from=native-build /node_modules node_modules/

EXPOSE 8080

USER node
CMD ["npm", "start"]