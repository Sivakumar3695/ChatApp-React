FROM node:17
RUN mkdir chatapp
COPY . ./chatapp
WORKDIR ./chatapp
CMD npm run start