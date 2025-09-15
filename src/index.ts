// Create server

import express, { Application } from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";

const app: Application = express();

dotenv.config();


async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    
    server.applyMiddleware({ app }); // no need to specify a path, defaults to /graphql

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
    });
}

startServer();