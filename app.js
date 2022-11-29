import express from 'express';
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";

// mongoose.connect('mongodb://localhost:27017/tuiter');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000)