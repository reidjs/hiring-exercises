const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const AccountSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    interestRate: {
      type: Number,
      required: true,
    },
    initialInvestmentCents: {
      type: Number,
      required: true,
    },
    accountEstablishedDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
AccountSchema.plugin(toJSON);

/**
 * @typedef Account
 */
const Token = mongoose.model('Account', AccountSchema);

module.exports = Token;
