const express = require("express");
const projectController = require("../controllers/projectControllers");


const router = express.Router();
router.get("/", projectController.kandydaci_get_all);//http://localhost:8080/project lub http://localhost:8080/kandydaci/
router.get("/project", projectController.project_get_all);//wystawiamy pod adress http://localhost:8080/project/project lub pod http://localhost:8080/kandydaci/project
router.get("/:id", projectController.project_get_byID);

module.exports = router;