# Bootstrap API Express Typescript

Starting template for APIs with express + typescript.

Libs installed:

- cors
- helmet
- morgan
- bodyParser
- dotenv
- mysql
- knex

---
## Initialize application

1) Rename **.env.example** to **.env**

2) Install libs of package.json with:

```
yarn install
```
or
```
npm install
```

```
yarn start:dev
```
or
```
npm run start:dev
```

1) Run server in development mode:
```
yarn start:dev
```
or
```
npm start:dev
```
---

## Migration create/up
```
yarn db:migrate:make migration_name
yarn db:migrate
```
or

```
npm run db:migrate:make migration_name
npm run db:migrate
```
