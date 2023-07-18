const router = require('express').Router();
const { manganime } = require('../controllers');


router.get('/hot-seasson', manganime.getDataHotSeasson);
router.get('/hot-seasson/:sub_id', manganime.getDataHotSeassonByID);


module.exports = router;