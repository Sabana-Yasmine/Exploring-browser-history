const express = require('express')
const router = require("express").Router();
const app = express();
const port = 6006

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

router.get('/get-history', (req, res) => {
  try {
   console.log("try")
   res.send("try")
  } catch (error) {
    console.log("catch", error.message)
    res.send("catch")
  }
});
