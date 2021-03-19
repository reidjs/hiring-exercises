const faker = require('faker');
const { ObjectID } = require('mongodb');

faker.locale = 'en';

module.exports = [
  {
    _id: ObjectID('60385713706f3c002e3c2ee4'),
    user: ObjectID('60385713706f3c002e3c2ed3'),
    interestRate: 8.5,
    initialInvestmentCents: 100000,
    accountEstablishedDate: new Date('2010-02-26T02:04:03.645Z'),
    createdAt: new Date('2021-02-26T02:04:03.645Z'),
    updatedAt: new Date('2021-02-26T02:04:03.645Z'),
  },
];
