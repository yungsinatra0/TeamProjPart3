# Setting up

1. Make sure you have [Node.js](https://nodejs.org/en/) recommended version (18.12-18.15) installed. 
2. Clone the repository: `git clone`.
3. Install the recommended VSCode Extensions.
4. Disable the @builtin Typescript Language server.
5. `npm install`.
6. Prisma
   1. Follow [this](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database) guide to install MySQL server locally on your machine. After that, [create a database](https://www.mysqltutorial.org/mysql-create-database/) using the [MySQL command-line client](https://www.mysqltutorial.org/getting-started-with-mysql/connect-to-mysql-server/).
   2. To setup prisma you need to create an `.env` file in the root directory of the project.
   3. Insert a new line in the file `DATABASE_URL="mysql://root:YOURPASSWORD@localhost:3306/YOURDATABASE?schema=public"`. Instead of YOURPASSWORD include the password created during MySQL install and instead of YOURDATABASE include the database created in step 1.
   4. `npx prisma generate` Generates the typescript from the schema.
   5. `npx prisma db push` Creates the tables in the database.
   6. `npx prisma studio` Runs the Prisma GUI interface (Usually on `http://localhost:5555`)
7. Type `npm run dev` in the console.
8. Open the browser `localhost:3000/dev`.


## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Documentation

- [Vue 3](https://vuejs.org/guide/introduction.html)
  - The frontend TS/JS framework which makes the webpage reactive.
  - We are using the composition API, ensure the docs reflect this.
- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
  - A meta-framework which creates universal applications, producing both the client-side and server-side code.
- [Prisma](https://www.prisma.io/)
  - The databse ORM.
- [TypeScript](https://www.typescriptlang.org/)
  - A superset of JS which adds static type checking.
- [Node](https://nodejs.org/)
  - The Javascript runtime environment that the server will be running on.
- [npm](https://www.npmjs.com/)
  - A package manager for Javascript.