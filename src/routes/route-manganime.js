const router = require('express').Router();
const { manganime } = require('../controllers');


router.get('/hot-seasson', manganime.getDataHotSeasson);
router.get('/hot-seasson/:sub_id', manganime.getDataHotSeassonByID);
router.post('/hot-seasson/add', manganime.addDataHotSeasson);
router.post('/hot-seasson/edit', manganime.editDataHotSeasson);
router.post('/hot-seasson/delate', manganime.deleteDataHotSeasson);


module.exports = router;