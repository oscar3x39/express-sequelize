const port = process.env.PORT || 5000;
const express = require('express');
const expressControllers = require('express-controller');
const bodyparser = require("body-parser");
const cors = require("cors");
const session = require('express-session')

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(session({
    cookie: {
        path    : '/',
        httpOnly: false,
        maxAge  : 24*60*60*1000
    },
    secret: 'test123456'
}));
app.use(cors());
expressControllers
    .setDirectory( __dirname + '/routers')
    .bind(app);
app.listen(port, () => console.log(`Server started on ${port}`));
