const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

async function run() {
  try {
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Todo-list server is running");
});
app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
