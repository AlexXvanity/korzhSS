class PetShopView {
    constructor() {
    }
    render (petsList) {
        let petShop = document.querySelector('.petShop'),
            tpl = ``,
            li = ``;

        petsList.forEach((pet)=> {
            li += `
                <li>
                    ${pet.name || 'Hamster'}
                    ${pet.color}
                    ${pet.price}
                    ${pet.isFluffy ? 'Fluffy' : 'Not fluffy'}
                </li>`.trim();
        });

        tpl = `<ul>${li}</ul>`;

        petShop.insertAdjacentHTML('beforebegin', tpl);
    }
}
