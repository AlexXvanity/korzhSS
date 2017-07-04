'use strict';
var PetES5 = (function(){
    function C (name, gender) {
        this.name = name;
        this.gender = gender;
        this.eat = function () {
            console.log('I am eating');
        }
    }
    return C;
})();
