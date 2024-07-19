FROM n8nio/n8n

WORKDIR /home/project

COPY package*.json ./
RUN npm install

COPY . .

CMD ["start"]