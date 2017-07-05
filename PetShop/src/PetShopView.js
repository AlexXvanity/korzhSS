class PetShopView {
    constructor() {}
    render (petsList) {
        let petShop = document.querySelector('.petShop'),
            tpl = generateTpl(petsList);

        petShop.insertAdjacentHTML('beforeend', tpl);

        function generateTpl (petsList) {
            let html = `
                <ul>
                    ${petsList.map(pet =>
                        `<li>` +
                            `${pet.name || 'Hamster'} ${pet.color} ${pet.price} ` +
                            `${pet.isFluffy ? 'Fluffy' : 'Not fluffy'}` +
                        `</li>`).join('\n')
                    }
                </ul>`;
                
            return html;
        }
    }
}
