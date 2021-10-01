import express from "express";
import cors from "cors";
import messagesRoute from "./routes/messages.js";
import usersRoute from "./routes/users.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.get("/messages", (req, res) => {
//   res.send("ok");
// });

const routes = [...messagesRoute, ...usersRoute];
routes.forEach(({ method, route, handler }) => {
  return app[method](route, handler);
});

app.listen(8000, () => {
  console.log("Server is running on 8000");
});
