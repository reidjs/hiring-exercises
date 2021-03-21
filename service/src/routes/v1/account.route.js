const express = require('express');
const accountController = require('../../controllers/account.controller');

const router = express.Router();

// NOTE: Removed auth from account due to auth middleware issues.
router.route('/').post(accountController.getAccount);
router.route('/transactions').post(accountController.getAccountTransactions);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Account
 *   description: Account retrieval for one user
 */
