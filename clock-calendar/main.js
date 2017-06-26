'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var clockCalendar = document.querySelector('.clock-calendar'),
        calendar = document.querySelector('.calendar'),
        clock = document.querySelector('.clock');


    clockCalendar.addEventListener('mousedown', changeView);

    function changeView (event) {
        debugger;
        if (event.button === 2) {
            if (calendar.classList.contains('disabled')) {
                calendar.classList.remove('disabled');
                clock.classList.add('disabled');
            } else if (clock.classList.contains('disabled')) {
                clock.classList.remove('disabled');
                calendar.classList.add('disabled');
            }

        }
    }
});
