const cities = [
  "ciudad de mexico",
  "Bogota",
  "Lima",
  "Buenos AIres",
  "Guadalajara"
];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
      if (!str) {
        reject(Error("Error"));
      }
      resolve(str.split("").reverse().join(""));
    });
  };
  //estan las 2 funciones porque hago un jest--coverage

module.exports = randomString;
