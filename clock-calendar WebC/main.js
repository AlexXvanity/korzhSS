'use strict';

window.onload = function () {
    init();
}

function init() {
    let el = document.registerElement('clock-calendar', ClockCalendar),
        component = document.querySelector('clock-calendar');

        component.init();
};
