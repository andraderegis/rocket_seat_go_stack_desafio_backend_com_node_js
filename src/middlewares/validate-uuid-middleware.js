const { isUuid } = require('uuidv4');

const validateUUID = (req, res, next) => {
    const { id } = req.params || req.body;

    if (!isUuid(id)) {
        return res
        .status(400)
        .json({
            error: 'Invalid Id.'
        });
    }

    return next();
}

module.exports = validateUUID;