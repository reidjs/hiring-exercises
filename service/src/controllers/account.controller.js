const catchAsync = require('../utils/catchAsync');

const getAccount = catchAsync(async (req, res) => {
  res.send('account');
});
const getAccountTransactions = catchAsync(async (req, res) => {
  res.send('accountTransactions');
});
const getAccounts = catchAsync(async (req, res) => {
  res.send('accounts');
});

module.exports = {
  getAccount,
  getAccounts,
  getAccountTransactions,
};
