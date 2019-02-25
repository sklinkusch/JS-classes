// A Class is a template of functionality
// Encapsulation of a data structure and functionality

const myArray = [1, 2, 3];
const myArray2 = new Array(1, 2, 3);

class Animal {
  constructor(type, sound, countOfLegs) {
    this.type = type;
    this.sound = sound;
    this.legs = countOfLegs;
  }
  makeSomeNoise() {
    return this.sound;
  }
}

class Bird extends Animal {
  constructor(sound, countOfLegs) {
    super("bird", sound, countOfLegs);
  }
}

const giraffe = new Animal('Mammal', '...', 4);
const cat = new Animal('cat', 'Meow', 4);
const sparrow = new Bird("cheep cheep", 2);

console.log(giraffe);
console.log(cat);
console.log(sparrow);