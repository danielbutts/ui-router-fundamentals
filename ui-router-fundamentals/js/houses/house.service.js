(function() {
  'use strict'

  angular.module('app')
    .service('houseService', function () {
      this.houses = [
        {id: 1, name: 'Spacious two bedroom', address: '10 Main St'},
        {id: 2, name: 'Smaller two bedroom', address: '11 Main St'},
        {id: 3, name: 'How is this even a house', address: '14 Main St'},
      ]

      this.addHouse = function (house) {
        this.houses.push(house)
        house.id = this.houses.length
      }

      this.findById = function (id) {
        return this.houses.find(house => house.id == id)
      }
    })

}());
