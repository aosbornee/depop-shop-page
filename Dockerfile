FROM node:alpine



WORKDIR /app
# seperate out this step to cache node modules build
RUN npm install -g serve

COPY package.json . 
RUN npm install --prod

COPY . .

RUN npm run build

CMD serve -p $PORT -s build