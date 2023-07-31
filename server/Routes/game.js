const express = require("express");
const router = express.Router();
const { read, list, create, update, del } = require("../Controllers/game")
router.get("/game",list);
router.get("/game/:id",read);
router.post("/game",create);
router.put("/game/:id",update);
router.delete("/game/:id",del);
module.exports = router;