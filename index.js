const express = require('express');
// const config = require('./config');
// const { getHtmlByConfig } = require('./html');

const app = express();
const port = 3100


app.use(express.static('public'));

// app.get('/*', (_, res) => {
//   res.send(html);
// });

app.listen(port, () => console.log(`> Server is running on 127.0.0.1:${port}`));
