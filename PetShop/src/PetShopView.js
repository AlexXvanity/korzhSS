class PetShopView {
    constructor() {
    }
    renderAllCats (catsList) {
        let petShop = document.querySelector('.petShop'),
            ul = document.createElement('ul');

        catsList.forEach((cat)=> {
            let li = document.createElement('li'),
                str = '';

            str = str + cat.name +' '+ cat.price +' '+ cat.color +' '+ cat.isFluffy;

            li.innerHTML = str;

            ul.appendChild(li);
        });

        petShop.appendChild(ul);
    }
    renderAllPets () {

    }


}
