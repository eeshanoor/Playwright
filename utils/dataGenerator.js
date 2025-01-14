// utils/dataGenerator.js
const { faker } = require('@faker-js/faker');

function generateRandomData() {
  // Updated to use faker.person instead of faker.name
  const randomName = faker.person.fullName(); // Use .fullName() instead of .findName()
  const randomEmail = faker.internet.email();
  const randomPassword = faker.internet.password();
  const randomAddress = faker.location.streetAddress();
  const randomAddress2 = faker.location.secondaryAddress();
  const randomCity = faker.location.city();
  const randomState = faker.location.state();
  const randomZipCode = faker.location.zipCode();
  const randomMobile = faker.phone.number();

  return {
    randomName,
    randomEmail,
    randomPassword,
    randomAddress,
    randomAddress2,
    randomCity,
    randomState,
    randomZipCode,
    randomMobile
  };
}

module.exports = { generateRandomData };
