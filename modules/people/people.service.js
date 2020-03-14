const Queue = require('../queue/Queue');
const store = require('../../store');
const helpers = require('../helpers/helpers');
// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    return {
      inLine: helpers.display(people)
    }
  },

  enqueue(person) {
    return people.enqueue(person);
  },

  dequeue() {
    return people.dequeue();
  }
};
