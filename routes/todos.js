var express = require("express");
var router = express.Router();
var firebase = require("../plugin/firebase");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const items = await firebase.get(req.baseUrl);
  res.render("todos", items);
});

router.post("/createItem", async function (req, res, next) {
  const items = req.body.items;
  const resItems = await firebase.post(items, req.baseUrl);
  res.send(resItems);
});

router.delete("/removeItem", async function (req, res, next) {
  const id = req.body.item.id;
  const resItems = await firebase.remove(id, req.baseUrl);
  res.send(resItems);
});

module.exports = router;
