import "dotenv/config";

import express from "express"
import { router } from "./src/routes/routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, ()=>{
    console.info("Server is running on port 3000");
})