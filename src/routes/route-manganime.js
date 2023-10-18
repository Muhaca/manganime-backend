const router = require('express').Router();
const { manganime } = require('../controllers');


router.get('/hot-season/get', manganime.getDataHotSeasson);
router.get('/hot-season/get/:sub_id', manganime.getDataHotSeassonByID);
router.post('/hot-season/add', manganime.addDataHotSeasson);
router.post('/hot-season/edit', manganime.editDataHotSeasson);
router.post('/hot-season/delate', manganime.deleteDataHotSeasson);


module.exports = router;