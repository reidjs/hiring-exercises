const express = require('express');
const auth = require('../../middlewares/auth');
const accountController = require('../../controllers/account.controller');

const router = express.Router();

router.route('/').get(auth('getAccounts'), accountController.getAccounts);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: Account management and retrieval
 */
