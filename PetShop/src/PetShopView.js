class PetShopView {
    constructor() {}
    render (petsList, listTitle) {
        let petShop = document.querySelector('.petShop'),
            lis = ``;

        lis = generateLis(petsList);

        petShop.insertAdjacentHTML('beforeend',generateTpl(lis, listTitle));

        function generateTpl (lis, listTitle) {
            return `<div>
                        <p>${listTitle}</p>
                        <ul>${lis}</ul>
                    </div>`;
        }

        function generateLis (petsList) {
            let li = ``;

            petsList.forEach((pet)=> {
                li += `<li>
                            ${pet.name || 'Hamster'}
                            ${pet.color}
                            ${pet.price}
                            ${pet.isFluffy ? 'Fluffy' : 'Not fluffy'}
                        </li>`;
            });

            return li;
        }
    }
}
