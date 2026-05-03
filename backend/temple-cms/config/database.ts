import path from "path";

// export default ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME"),
//       user: env("DATABASE_USERNAME"),
//       password: env("DATABASE_PASSWORD"),
//       ssl: {
//         rejectUnauthorized: false, // Required for Render PostgreSQL
//       },
//       schema: env("DATABASE_SCHEMA", "public"),
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
//   },
// });

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
