const Queue = require('../queue/Queue');
const store = require('../../store');
const helpers = require('../helpers/helpers');
// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    return {
      nextCat: helpers.peek(pets.cats),
      nextDog: helpers.peek(pets.dogs)
    }
  },

  dequeue(type) {
    return type === 'dog' ? pets.dogs.dequeue() : pets.cats.dequeue();
  }
};
