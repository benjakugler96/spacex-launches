const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get(async (req,res) => {
    try {
        const response = await User.find();
        const data = await res.json(response);
        return data
    }
    catch (err) {
        return await res.status(400).json(`Err: ${err}`);
    }
});

router.route('/add').post(async (req,res) => {
    const { username } = req.body;
    const newUser = new User({username});
    newUser.save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
});

module.exports = router;
