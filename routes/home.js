const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');
const postsController = require('../controllers/posts');
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', homeController.getIndex)

router.get("/profile", ensureAuth, postsController.getProfile);

// need to work on this
// router.get("/feed", ensureAuth, postsController.getFeed);

// might need to revisit
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// this seems to work
router.get("/logout", authController.logout);

// these seem to be done
router.get("/signup", authController.getSignup);
router.post("/createUser", authController.postSignup);

module.exports = router;