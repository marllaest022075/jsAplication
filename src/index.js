import  express  from "express";
import ejs from "ejs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index";

const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});