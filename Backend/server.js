const express = require("express")
const app = express();

const dotenv = require("dotenv")
const PORT = process.env.PORT || 5002

dotenv.config();

app.listen(5002, console.log(`The server started on port ${PORT}`))