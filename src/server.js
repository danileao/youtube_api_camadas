import express from "express";
import { UserController } from "./controllers/user.controller.js";

const app = express();
app.use(express.json());

const userController = new UserController();

app.post("/users", userController.handle);

app.listen(3002, () => console.log("Server is running on PORT 3002"));
