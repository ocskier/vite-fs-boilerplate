// Package imports
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import chalk from "chalk";
import express from "express";
import cors from "cors";
import morgan from "morgan";

// import utils from "./auth/utils.js"; // TODO: Turn on with auth
import db from "./connection/db.js";
import schema from "./schema/index.js";

// Environment variables
const PORT = process.env.PORT || 5001;

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  ...schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

// Cors in non-prod environments
if (!(process.env.NODE_ENV === "production")) app.use(cors());

morgan.token('graphql-query', (req) => {
  const {query, variables, operationName} = req.body;
  return `Operation: ${operationName}`;
});

// Logging
app.use(
  morgan((tokens, req, res) => {
    return (
      "--> " +
      [
        chalk.white.bgGray.bold(tokens.method(req, res)),
        tokens.status(req, res) >= 400
          ? chalk.rgb(248, 8, 8).bold.bgGray(tokens.status(req, res))
          : tokens.status(req, res) >= 300 && tokens.status(req, res) < 400
          ? chalk.rgb(253, 216, 4).bold.bgGray(tokens.status(req, res))
          : chalk.bold.rgb(31, 230, 38).bgGray(tokens.status(req, res)),
        chalk.white(tokens.url(req, res)),
        chalk.white(tokens['response-time'](req, res), 'ms'),
        chalk.blue(tokens["graphql-query"](req)),
      ].join(" ")
    );
  })
);

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  "/graphql",
  expressMiddleware(server, {
    context: ({ req }) => req,
    // TODO: Turn on with auth
    // utils.verifyToken,
  })
);

app.get("*", (req, res) => {
  res.status(404).send("Route not setup yet!");
});

await new Promise((resolve) => {
  httpServer.listen({ port: PORT }, resolve);
});

if (db) console.log("Database connected!");

if (process.env.NODE_ENV === "production") {
  console.log("Production server started!");
} else {
  console.log(`Now browse to http://localhost:${PORT}/graphql`);
}
