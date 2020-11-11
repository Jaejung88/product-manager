const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.listen(port, () => console.log(`Listening on port ${port}`));

require('./server/config/database.config');
require('./server/routes/products.routes')(app);

