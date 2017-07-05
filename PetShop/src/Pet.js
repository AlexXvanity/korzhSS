'use strict';

class Pet {
    constructor (color, price) {
        this.color = color;
        this.price = price;
    }
    areYouFluffy () {
        return this.isFluffy || undefined;
    }
    isYourColor (_color) {
        return this.color === _color;
    }
}
