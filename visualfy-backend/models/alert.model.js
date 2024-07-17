const mongoose = require("mongoose");
const tools = require("../utils/tools");

const alertSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        data: {
            last_month_hits: {
                type: Number,
                required: true,
                default: 0,
            },
        },
    },
    {
        timestamps: true,
    }
);

const Alert = mongoose.model("Alert", alertSchema);

Alert.parse = function (obj) {
    const avoid = ["__v", "updatedAt", "createdAt", "_id"];
    obj = tools.parseItems(avoid, obj);

    return obj;
};

Alert.parseList = function (arr) {
    return arr.map((item) => Alert.parse(item));
};
module.exports = Alert;
