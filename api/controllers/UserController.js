/**
 * UserController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

		test: function(req, res) {
			var socketId = sails.sockets.id(req.socket);
			console.log("SOCKET ID", socketId);
		}


	
};
