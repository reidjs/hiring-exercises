const faker = require('faker');
const { ObjectID } = require('mongodb');

faker.locale = 'en';

module.exports = [
  {
    account: ObjectID('60385713706f3c002e3c2ee4'),
    description: 'Interest Payment',
    amount: 1000,
    createdAt: new Date('2021-02-26T02:04:03.645Z'),
    updatedAt: new Date('2021-02-26T02:04:03.645Z'),
  },
];
