FROM cypress/included:12.17.1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npx", "cypress", "run", "--browser", "chrome"]

