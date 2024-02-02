const exppress = require("express");
const { createUser } = require("../controllers/userController");
const router = exppress.Router();

router.post("/register", createUser);

module.exports = router;
