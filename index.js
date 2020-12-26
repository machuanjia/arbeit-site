const express = require('express');
const app = express();
const port = 3100
app.use("/", express.static(__dirname + "/public"));
app.listen(port, () => console.log(`> Server is running on 127.0.0.1:${port}`));
