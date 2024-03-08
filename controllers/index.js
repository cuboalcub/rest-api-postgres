const models = require('../database/models');
const createUser = async (req, res) => {
    try {
        const user = await models.User.create(req.body);
        return res.status(201).json({
            user
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getAllUsers = async (req, res) => {
    console.log('getAllUsers');
    try {
        const users = await models.User.findAll({
            include: [

            ]


        });
        res.status(200).json({ users });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers
};