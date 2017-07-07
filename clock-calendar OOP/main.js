'use strict';

document.addEventListener('DOMContentLoaded', function () {
        let eventHandler = new EventHandler(),
            controller = new Controller(),
            model = new Model(),
            view = new View(eventHandler);

            controller.init(model, view);

        // let el = document.registerElement('clock-calendar', ClockCalendar);
        // let cc = new el;
        // document.body.appendChild(cc);

});
