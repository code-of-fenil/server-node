import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyparser from "body-parser";

const app = express();

// use to secure express server by setting various HTTP headers.
app.use(helmet());

app.use(cors({ origin: "*" }));

// use bodyParser to read json payloads

app.use(express.json());
// app.us(bodyParser.json())

// we are going to attach all the routes here with this server
export default app;
