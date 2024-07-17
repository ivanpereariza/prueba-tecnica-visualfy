const mongoose = require("mongoose");
const tools = require("../utils/tools");

const prioritySchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },
        priority: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
    },
    {
        timestamps: true,
    }
);

const Priority = mongoose.model("Priority", prioritySchema);

Priority.parse = function (obj) {
    const avoid = ["__v", "updatedAt", "createdAt", "_id"];
    obj = tools.parseItems(avoid, obj);

    return obj;
};

Priority.parseList = function (arr) {
    return arr.map((obj) => Priority.parse(obj));
};

module.exports = Priority;
