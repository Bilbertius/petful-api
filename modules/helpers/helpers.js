
const helpers = {
	
	display : function(queue) {
		const displayArr = [];
		if (queue.first === null) {
			return null
		}
		let current = queue.last;
		while (current !== null) {
			displayArr.push(current.data);
			current = current.next
		}
		return displayArr;
	},

	peek : function(queue) {
		if (queue.first === null) {
			return null
		}
		return queue.first.data
	},

	isEmpty : function(queue) {
	return peek(queue) === null;
	}
};
module.exports = helpers;