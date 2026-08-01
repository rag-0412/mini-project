import app from "./src/app.js";
import dbConnection from "./src/db/db.js";

const PORT = 3000;
dbConnection();

app.listen(PORT, (req, res) => {
    console.log(`server is running on ${PORT}`)
});