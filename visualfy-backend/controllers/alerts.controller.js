const Alert = require("../models/alert.model");
const Priority = require("../models/priority.model");
const tools = require("../utils/tools");

/**
 * Get a list of alerts based on priority and name filters.
 * 
 * @async
 * @function getAlerts
 * @returns {Promise<void>} Returns a list of alerts.
 */
exports.getAlerts = async (req, res, next) => {
    const { priority, name } = req.query;

    try{
        const query = await manageQuery(priority, name, res);

        const alerts = await Alert.find(query).sort({ createdAt: -1 });;
        return tools.returnOK(res, Alert.parseList(alerts), 200);
    } catch (error) {
        return tools.returnKO(res, error, 500);
    }
};

/**
 * Create a new alert with associated priority.
 * 
 * @async
 * @function createAlert
 * @returns {Promise<void>} Returns the created alert and priority.
 */
exports.createAlert = async (req, res, next) => {
    const { title, type, priority } = req.body;

    if (!title || !type || !priority)
        return tools.returnKO(res, "MISSING_FIELDS", 400);

    let path = "";
    if (req.file) path = req.file.path;

    try {
        const newAlert = await Alert.create({ title, type, image: path });
        const newPriority = await Priority.create({ type, priority });

        return tools.returnOK(
            res,
            {
                alert: Alert.parse(newAlert),
                priority: Priority.parse(newPriority),
            },
            201
        );
    } catch (error) {
        return tools.returnKO(res, error, 500);
    }
};

// #region Utils
/**
 * Manage the query parameters for fetching alerts.
 * 
 * @async
 * @function manageQuery
 * @param {string} priority - The priority filter.
 * @param {string} name - The name filter.
 * @returns {Promise<Object>} The query object.
 */
const manageQuery = async (priority, name, res) => {
    let query = {};

    if (name) query.title = { $regex: name, $options: "i" };

    if (priority) {
        try {
            const priorityNumbers = priority
                .split(",")
                .map((num) => Number(num.trim()));
            const priorities = await Priority.find({
                priority: { $in: priorityNumbers },
            });
            query.type = { $in: priorities.map((p) => p.type) };
        } catch (error) {
            throw new Error('PRIORITY_NOT_NUMBER');
        }
    }

    return query;
};
// #endregion
