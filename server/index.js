const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const posts = require('./routers/posts.js');
const corsHeader = require('./corsHeader');

const appPort = process.env.PORT || 8675;
const app = express();

app
  .use(corsHeader)
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/posts', posts)

app.route('/', (req, res) => {
  console.log(process.env.USER);
  console.log(process.env.PORT);
  res.json({'body': 'HELLO WORLD'});
});

app.listen(appPort, () => console.log(`Listening on port ${appPort}`));
