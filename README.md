## Getting started
### Setup
    git clone git@github.com:NAzT/sails-angular-seed.git your_project
    cd your_project
    npm install
    bower install
    grunt
    sails lift 
    

## Configurations
### App-level socket
    
- config/sockets.js

        onConnect: function(session, socket) {
              console.log('onConnection')
              var numberOfSockets = Object.keys(socket.namespace.manager.sockets.sockets).length
              socket.emit('connectedUsers', { count: numberOfSockets });
              socket.broadcast.emit('connectedUsers', { count: numberOfSockets });
        }


### Controller-level socket

- api/controllers/your_controller.js

        method: function (req, res) {
            sails.io.sockets.emit('rfid', { card_id: req.params.id})
        }
