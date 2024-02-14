const exppress = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
} = require("../controllers/userController");
const router = exppress.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);

module.exports = router;
