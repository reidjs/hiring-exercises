const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const TransactionSchema = mongoose.Schema(
  {
    account: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Account',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
TransactionSchema.plugin(toJSON);

/**
 * @typedef Account
 */
const Token = mongoose.model('Transaction', TransactionSchema);

module.exports = Token;
