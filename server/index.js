const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const router = require('./router/api');

const app = express();
app.use(helmet());
app.use(morgan());
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(3000, () => {console.log('server connected')});
