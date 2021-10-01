import express from "express";
import cors from "cors";
import messagesRoute from "./routes/messages.js";
import usersRoute from "./routes/users.js";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers/index.js";
import schema from "./schema/index.js";
import { readDB } from "./dbController.js";

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/messages", (req, res) => {
//   res.send("ok");
// });

// const routes = [...messagesRoute, ...usersRoute];
// routes.forEach(({ method, route, handler }) => {
//   return app[method](route, handler);
// });
// graphql을 사용하면 서버에서부터 취사 선택된 데이터가 내려올 수 있다.
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: {
      // resolvers의 context 부분
      messages: readDB("messages"),
      users: readDB("users"),
    },
  },
});

const app = express();
await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
  cors: {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    credentials: true,
  },
});

await app.listen(8000, () => {
  console.log("Server is running on 8000");
});

// localhost:8000/graphql
// query Message($id: ID!) {
//   message(id: $id) {
//     id,
//         userId,
//         timestamp,
//         userId
//   }
// }
