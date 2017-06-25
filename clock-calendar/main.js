'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var clockCalendar = document.querySelector('.clock-calendar'),
        calendar = document.querySelector('.calendar'),
        clock = document.querySelector('.clock');

    clockCalendar.addEventListener('mousedown', changeView);

    function changeView (event) {
        if (event.button === 2) {
            this.classList.toggle('switched');
            if (this.classList.contains('switched')) {
                switchBlocks.call(this, clockCalendar, calendar, clock);
            } else {
                switchBlocks.call(this, clockCalendar, clock, calendar);
            }

        }
    }

    function switchBlocks (wrap, element1, element2) {
        this.insertBefore(element1, this.firstChild);
    }
});
