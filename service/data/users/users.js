const faker = require('faker');
const { ObjectID } = require('mongodb');

faker.locale = 'en';

module.exports = [
  {
    _id: ObjectID('60385713706f3c002e3c2ed3'),
    role: 'user',
    name: 'Some User',
    email: 'some@user.com',
    password: '$2a$08$AFX9CSVZV3Qn1eyIr4DiGOTNAugU670V7gtJRGvIIBvU8xTHfJwVW',
    createdAt: new Date('2021-02-26T02:04:03.645Z'),
    updatedAt: new Date('2021-02-26T02:04:03.645Z'),
  },
];
