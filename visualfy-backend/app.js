require("dotenv").config();
require("./db");
const logger = require("./config/logger");

const express = require("express");
const app = express();

require("./config")(app);

app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.originalUrl}`);
    next();
});

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

require("./error-handling")(app);

module.exports = app;
