const express = require("express");

const router = express.Router();

const activitiesControllers = require("./controllers/activitiesControllers");

router.get("/activitiesSpring", activitiesControllers.spring);
router.get("/activitiesSummer", activitiesControllers.summer);
router.get("/activitiesFall", activitiesControllers.fall);
router.get("/activitiesWinter", activitiesControllers.winter);
router.get("/activitiesOthers", activitiesControllers.others);

router.get("/activities/:id", activitiesControllers.read);
router.put("/activities/:id", activitiesControllers.edit);
router.post("/activities", activitiesControllers.add);
router.delete("/activities/:id", activitiesControllers.destroy);

module.exports = router;
