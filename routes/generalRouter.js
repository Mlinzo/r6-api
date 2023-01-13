const { Router } = require("express");
const generalController = require("../controllers/generalController");
const router = Router();


router.get('/', (req, res, next) => res.sendStatus(200));
router.get('/general/:platform(pc|psn|xbox)/:username', generalController.general);
router.get('/casual/:platform(pc|psn|xbox)/:username', generalController.casual);
router.get('/rank/:platform(pc|psn|xbox)/:username', generalController.rank);
router.get('/deathmatch/:platform(pc|psn|xbox)/:username', generalController.deathmatch);
// router.get('/operator/:platform/:username/:operator', generalController.operator);


module.exports = router;