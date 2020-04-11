const express = require('express');
const router = express.Router();

const userRoutes = require('../routes/user.route');
const skillRoutes = require('./skill.route');

router.use('/users/', userRoutes);
router.use('/skills/', skillRoutes);

module.exports = router;
