'use strict';

angular.module('natApp', [])
  .controller('MainCtrl', function ($scope) {
    $scope.direction_mngr = new DirectionManager();
    setTimeout(function() {
      snake_game.start();
    }, 0)


    // $socket.on('connectedUsers', function(data) {
    //   socket.get('/user/test', function(con) {
    //     console.log(con);
    //     snake_game.start();
    //   });
    //   $scope.connectedUsers = data;
    //   snake_game.set_direction_manager($scope.direction_mngr);
    // })

    // $socket.on('serialdata', function(data) {
    //   var pad = data.data.split(",");

    //   var direction = {
    //     UP: parseInt(pad[0].split(":")[1], 10),
    //     DOWN: parseInt(pad[1].split(":")[1], 10),
    //     LEFT: parseInt(pad[2].split(":")[1], 10),
    //     RIGHT: parseInt(pad[3].split(":")[1], 10),
    //     S: parseInt(pad[4].split(":")[1], 10),
    //     E: parseInt(pad[5].split(":")[1], 10),
    //     A: parseInt(pad[6].split(":")[1], 10),
    //     X: parseInt(pad[7].split(":")[1], 10),
    //     Y: parseInt(pad[8].split(":")[1], 10),
    //   }


    //   var directions = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
    //   var charCode = {
    //         UP: 107,
    //         DOWN: 106,
    //         LEFT: 104,
    //         RIGHT: 108
    //       }

    //   if (direction.X < 200) {
    //     direction.LEFT = 0;
    //   }
    //   else if (direction.X > 550) {
    //     direction.RIGHT = 0;
    //   }

    //   if (direction.Y < 200) {
    //     direction.DOWN = 0;
    //   }
    //   else if (direction.Y > 550) {
    //     direction.UP = 0;
    //   }


    //   directions.forEach(function(d) {
    //     if (direction[d] === 0) {
    //       // var method = d.toLowerCase();
    //       $scope.direction_mngr.set_heading_direction(charCode[d]);
    //     }


    //   });



    // })
  });
