// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }

const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

// var favoriteNumber = 42;

// var instructor = {
//   firstName: 'Colt',
// };

// instructor[favoriteNumber] = 'That is my favorite!';

let favoriteNumber = 42;
let instructor1 = {
  firstName: 'colt',
  [favoriteNumber]: 'That is my favorite!',
};

// var instructor = {
//   firstName: 'Colt',
//   sayHi: function () {
//     return 'Hi!';
//   },
//   sayBye: function () {
//     return this.firstName + ' says bye!';
//   },
// };

let instructor2 = {
  firstName: 'colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  },
};

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
};
