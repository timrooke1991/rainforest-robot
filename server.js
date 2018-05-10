const express         = require('express');
const expressLayouts  = require('express-ejs-layouts');
const bodyParser      = require('body-parser');
const router          = require('./config/routes');
const app             = express();
const port            = 3000;
const dest    = `${__dirname}/src`;


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(dest));
app.use(expressLayouts);
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => console.log(`Running on port: ${port}`));

// export app for tests
module.exports = app;
