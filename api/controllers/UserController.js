/**
 * UserController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

		test: function(req, res) {
			var socketId = sails.sockets.id(req.socket);
			sails.serialPort.on('data', function(data) {
				sails.sockets.emit(socketId, 'serialdata', { data: data });
			});
			res.json({hello: 'ja'})
		}


	
};
