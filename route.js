// Managing routes
// Author: vickybaskae7@gmail.com
// Date: 23 Mar, 2022.

const abcd = require("../controller/emp");
const router = require('express').Router();
//// Methods
router.post("/add", abcd.add);
router.get("/:id", abcd.listone);
router.put("/:id", abcd.update);
router.delete("/:id", abcd.del);

module.exports = router;  