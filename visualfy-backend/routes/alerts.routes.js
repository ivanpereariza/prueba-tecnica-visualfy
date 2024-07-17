const router = require("express").Router();

const controller = require("../controllers/alerts.controller");
const uploader = require("../middlewares/cloudinary.middleware");

router.get("/", controller.getAlerts);

router.post("/", uploader.single("file"), controller.createAlert);

module.exports = router;
