// main server----
// Author: vickybaskae7@gmail.com
// Date: 23 Mar, 2022.

const express = require('express');
let port = 6000;
let app = express()
//------Middleware
app.use(express.json());
///---------Api router
const router = require("./routes/route");
app.use("/api", router);

//-------------Test api
app.get("/test", (req, res) => {
  res.send("testing sucess")
});
////------Running server
app.listen(port, (req, res) => {
  console.log("server running")
});

