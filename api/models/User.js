/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  // Subscribers only get to hear about update and destroy events.
  // This lets us keep our "users online" list accurate, while avoiding
  // sending private messages to anyone but the intended recipient.
  // To get chat messages for a user, you subscribe to the `message`
  // context explicitly.
  autosubscribe: ['destroy', 'update'],
  attributes: {
	name: 'string',
  },

  	// Hook that gets called after the default publishUpdate is run.
  	// We'll use this to tell all public chat rooms about the user update.
	afterPublishUpdate: function (id, changes, req, options) {
		console.log("afterPublishUpdate");
		
	}

};
