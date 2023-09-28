const express = require("express");
const setCurrentUser = require("../middleware/setCurrentUser");
const {
  getIndividualData,
  getFinancialData,
  getTransaction,
} = require("../controller/financial");
const {
  sendHealth,
  postLogin,
  postSignup,
  logout,
} = require("../controller/auth");

const router = express.Router();

router.get("/individual", setCurrentUser, getIndividualData);
router.get("/finicial", setCurrentUser, getFinancialData);
router.get("/health", sendHealth);
router.post("/login", postLogin);
router.post("/signup", postSignup);
router.get("/logout", logout);
router.get("/transaction", setCurrentUser, getTransaction);

module.exports = router;
