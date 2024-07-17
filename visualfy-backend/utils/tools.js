const logger = require("../config/logger");

exports.returnOK = async (res, data = {}, code = 200) => {
    logger.info(`OK - ${code}`);

    return res.status(code).json({
        status: code,
        data: data,
    });
};

exports.returnKO = async (res, data = {}, code = 418) => {
    if (!data) data = {};

    logger.error(data);

    return res.status(code).json({
        status: code,
        message: data.message || data ||  "ERROR",
    });
};

exports.parseItems = (avoid = [], obj = {}) => {
    const plainObj = obj.toObject();

    const newObj = {};

    for (let key in plainObj) {
        if (!avoid.includes(key)) {
            newObj[key] = plainObj[key];
        }
    }

    return newObj;
};
