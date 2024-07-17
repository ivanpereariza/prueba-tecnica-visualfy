const router = require("express").Router();

const alertsRoutes = require("./alerts.routes");

router.use("/alerts", alertsRoutes);

module.exports = router;
