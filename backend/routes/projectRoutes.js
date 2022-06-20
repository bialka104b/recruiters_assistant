const express = require("express");
const projectController = require("../controllers/projectControllers");

const router = express.Router();
router.get("/kandydaci", projectController.kandydaci_get_all); //ttp://localhost:8080/project/kandydaci lub http://localhost:8080/kandydaci/
router.get("/project", projectController.project_get_all); //wystawiamy pod adress http://localhost:8080/project/project lub pod http://localhost:8080/kandydaci/project
router.get("/:id", projectController.project_get_byID);
router.put("/kandydaci/:id", projectController.kandydaci_update);
router.post("/:data", projectController.kandydaci_create);
router.post("/kandydaci/:data", projectController.kandydaci_createMany);
router.delete("/kandydaci/:id", projectController.kandydaci_delete);

module.exports = router;
