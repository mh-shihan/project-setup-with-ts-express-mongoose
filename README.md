# Backend Project Setup using TypeScript

## Install node

```bash
npm init -y
```

## Install TypeScript

```bash
npm install typescript --save-dev
```

## Initialize TypeScript configuration

```bash
tsc -init
```

## Install Express.js

```bash
npm install express
```

## Install Mongoose

```bash
npm install mongoose
```

## Install Dotenv for environment variables

```bash
npm install dotenv
```

## Install Cors

```bash
npm install cors
```

## Install TypeScript types for Node.js and Express

```bash
npm install @types/node @types/express @types/cors --save-dev
```

## Setup dotenv config

Create a `app\config\index.ts` file in the src directory of your project:

```typescript
import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`Level2 First app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log(`😈 unhandledRejection is detected, shutting down ...`);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
    process.exit(1);
  }
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected, shutting down ...`);

  process.exit(1);
});
```

## Now Its Time to setup eslint and Prettier

[Follow This Article to Setup Eslint & Prettier](https://blog.logrocket.com/linting-typescript-eslint-prettier)

## Install ts-node-dev to run TypeScript files directly

```bash
npm install ts-node-dev --save-dev
```

## Update the package.json scripts

```json
{
  "scripts": {
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "lint": "eslint --ext .js,.ts .",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## Use the Validator library for string validation.

## Use Zod of Joi for validation. Zod is preferred.

## Install Bcrypt for password hashing

```bash
npm install bcrypt
npm install -D --save @types/bcrypt
```

## Install http-status for showing error status

```bash
npm i http-status
```

## Install cookie-parser

```bash
npm install cookie-parser
npm i -D @types/cookie-parser
```

## Do not forget to add `.env` in `gitignore` file
