angular = require('angular')
require('ngVue')
vueComponents = require('./vue-component.js')

init = ()->
  app = angular.module('MyApplication', ['ngVue']);

  controller = app.controller('IndexCtrl', ['$scope', ($scope)->
    $scope.greetings = ()->
      alert('Greetings, my friend!!!');

    $scope.vProps = {
      userName: 'Denyska'
    }

  ])

  app.value('GracefulComponent', vueComponents.component);

init()
