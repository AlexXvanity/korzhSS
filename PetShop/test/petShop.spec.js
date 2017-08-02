describe('Pet Shop store', function () {
    
    let petShop = new PetShop();

    petShop.addPet(new Dog('black', 100, 'Strelka'));
    petShop.addPet(new Dog('red', 200, 'Belka'));
    petShop.addPet(new Dog('gray', 300, 'Pushok'));
    petShop.addPet(new Cat('black', 400, 'Barsik', true));
    petShop.addPet(new Cat('white', 500, 'Moska', true));
    petShop.addPet(new Cat('gray', 450, 'Puska', false));
    petShop.addPet(new Hamster('orange', 600, true));
    petShop.addPet(new Hamster('green', 340, true));
    petShop.addPet(new Hamster('blue', 290, false));

    it ('should add pet into Shop', function () {
        expect(petShop.petsList.length).toBe(9);
    });

    it ('should return all cats', function () {
        let result = petShop.getAllCats();
        expect(petShop.getAllCats()).toEqual(result);
    });

    it ('should getExpensivePets', function () {
        let result = petShop.getExpensivePets();
        expect(petShop.getExpensivePets()).toEqual(result);
    });

    it ('should getFluffyOrWhite', function () {
        let result = petShop.getFluffyOrWhite();
        expect(petShop.getFluffyOrWhite()).toEqual(result);
    });
});
