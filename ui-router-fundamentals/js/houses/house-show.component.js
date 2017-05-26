(function() {
  'use strict'

  angular.module('app')
    .component('houseShow', {
      controller: function ($stateParams, houseService) {
        const vm = this
        vm.$onInit = function () {
          vm.house = houseService.findById($stateParams.houseId)
        }

      },
      template: `
        <h1>{{$ctrl.house.name}}</h1>

        <p>{{$ctrl.house.address}}</p>

        <a ui-sref="home">Return Home</a>

      `
    })

}());
