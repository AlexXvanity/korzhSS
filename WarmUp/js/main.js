var petEs5 = new PetES5('Bars', 'male'),
    petEs6 = new Pet('Charly', 'male'),
    cat = new Cat('Jordan','male'),
    dog = new Dog('Moska', 'female');

console.log('ES5');
console.dir(petEs5);

console.log('ES6');
console.dir(petEs6);

console.log('cat extends from PetES5');
console.dir(cat);

console.log('dog extends from Pet');
console.dir(dog);
