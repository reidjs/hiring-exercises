const catchAsync = require('../utils/catchAsync');
const { Account, Transaction, User } = require('../models');

const getAccount = catchAsync(async (req, res) => {
  const userId = req.body.userId
  const account = await Account.findOne({user: userId})
  res.send(account);
});
const getAccountTransactions = catchAsync(async (req, res) => {
  const accountId = req.body.accountId
  const transactions = await Transaction.find({account: accountId})

  // TODO: Use an aggregate query(?) instead (new to mongo, was not sure how to do this)
  // For each txn, send the users as well
  const users = {}
  for(let i = 0; i < transactions.length; i++){
    const txn = transactions[i]
    const acct = await Account.findById(txn.account)
    const user = await User.findById(acct.user)

    users[txn.id] = user
  }

  res.send({ transactions, users });
});
const getAccounts = catchAsync(async (req, res) => {
  res.send('accounts');
});

module.exports = {
  getAccount,
  getAccounts,
  getAccountTransactions,
};
