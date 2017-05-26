(function() {
  'use strict'

  angular.module('app')
    .component('houseNew', {
      controller: function ($state, houseService) {
        const vm = this

        vm.$onInit = function () {
          vm.houses = houseService.houses
        }

        vm.addHouse = function () {
          const id = houseService.addHouse(vm.house)
          console.log('vm.addHouse',vm.house, id);
          $state.go('show-house',{houseId: id})
        }
      },
      template: `
        <h1>New House</h1>

        <form ng-submit="$ctrl.addHouse()">
          <p>
            Name: <input ng-model="$ctrl.house.name">
          </p>
          <p>
            Address: <input ng-model="$ctrl.house.address">
          </p>
          <p>
            <button type="submit">Create House</button>
          </p>
        </form>
      `
    })

}());
