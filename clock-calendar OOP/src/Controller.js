'use strict';

class Controller {
    constructor() {}
    init (model, view) {
        view.initListeners();
    }
    switchFormat () {
        let model = new Model(),
            view = new View(),
            data = '';

        data = model.getAppData();
        view.render(data);
    }
    switchState () {
        let model = new Model();
            model.switchSate();
    }
}
