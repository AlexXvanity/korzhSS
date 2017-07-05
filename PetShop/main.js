'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let petShop = new PetShop('PetShop');
    let petShopView = new PetShopView();

    petShop.addPet(new Dog('black', 100, 'Strelka'));
    petShop.addPet(new Dog('red', 200, 'Belka'));
    petShop.addPet(new Dog('gray', 300, 'Pushok'));
    petShop.addPet(new Cat('black', 400, 'Barsik', true));
    petShop.addPet(new Cat('white', 500, 'Moska', true));
    petShop.addPet(new Cat('gray', 450, 'Puska', false));
    petShop.addPet(new Hamster('orange', 600, true));
    petShop.addPet(new Hamster('green', 340, true));
    petShop.addPet(new Hamster('blue', 290, false));

    petShopView.render(petShop.getAllCats());

    petShopView.render(petShop.getExpensivePets());

    petShopView.render(petShop.getFluffyOrWhite());
}
