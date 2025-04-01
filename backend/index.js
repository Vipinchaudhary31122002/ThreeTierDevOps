const tasks = require("./TaskRoute");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config()

connection();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
  res.status(200).send("sever is working")
})

app.get('/ok', (req, res) => {
    res.status(200).send('ok')
  })

app.use("/api/tasks", tasks);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}...`));
