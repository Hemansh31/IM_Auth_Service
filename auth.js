const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const app = express();
const port = process.env.PORT || 1400;
const chalk = process.env.NODE_ENV === "development" ? require('chalk') : null;

app.listen(port, () => {
    if(chalk) console.log(chalk.green(`Auth Service listening on port ${port}`));
    else console.log(`Auth Service listening on port ${port}`);
});