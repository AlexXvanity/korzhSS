'use strict';

class PetShop {
    constructor (name) {
        this.name = name;
        this.petsList = [];
        this.averagePrice = 0;
    }
    addPet (pet) {
        this.petsList.push(pet);
    }
    getAllCats () {
        let catsList = [];

        this.petsList.forEach((pet)=> {
            if (pet instanceof Cat) {
                catsList.push(pet);
            }
        });

        return catsList;
    }
    getExpensivePets () {
        let petsList = [],
            average = 0;

        this.petsList.forEach((pet)=> {
            average += pet.price;
        });

        average = average / this.petsList.length;
        this.averagePrice = average;

        this.petsList.forEach((pet)=> {
            if (pet.price > average) {
                petsList.push(pet);
            }
        });

        return petsList;
    }
    getFluffyOrWhite () {
        let petsList = [];

        this.petsList.forEach((pet)=> {
            if (pet.color === 'white' || pet.isFluffy) {
                petsList.push(pet);
            }
        });

        return petsList;
    }
}
