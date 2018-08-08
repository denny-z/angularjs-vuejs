angular = require('angular')
require('ngVue')
vueComponents = require('./vue-component.js')

init = ()->
  app = angular.module('MyApplication', ['ngVue']);

  controller = app.controller('IndexCtrl', ['$scope', ($scope)->
    $scope.message = 'Greetings, my friend!';

    $scope.vProps = {
      userName: 'Denys'
    }
    $scope.gracefulGreeting = (message)->
      alert(message);

  ])

  app.value('GracefulComponent', vueComponents.component);

init()
