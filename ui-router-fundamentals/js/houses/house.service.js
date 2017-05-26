(function() {
  'use strict'

  angular.module('app')
    .service('houseService', function () {
      this.houses = [
        {id: 1, name: 'Spacious two bedroom', address: '10 Main St'},
      ]

      this.addHouse = function (house) {
        const id = this.houses.length + 1
        house.id = id
        this.houses.push(house)
        return id
      }

      this.findById = function (id) {
        return this.houses.find(house => house.id == id)
      }
    })

}());
