'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var clock = document.querySelector('.clock'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

    generateClock();

    setInterval(generateClock, 1000);

    clock.addEventListener('click', swicthClockFormat);

    function swicthClockFormat () {
        this.classList.toggle('short-format');
    }

    function generateClock () {
        var clockElemets = {},
            time = {},
            date = new Date();

        time = generateTime(date);
        clockElemets = getCLockElements();

        addClock(clockElemets, time);
    }

    function generateTime (currentDate) {
        var time = {};

        time.hours = currentDate.getHours();
        time.minutes = currentDate.getMinutes();
        time.seconds = currentDate.getSeconds();

        return time;
    }

    function getCLockElements () {
        var clockElements = {};

        clockElements.hours = hours;
        clockElements.minutes = minutes;
        clockElements.seconds = seconds;

        return clockElements;
    }

    function addClock (clockElements, time) {
        clockElements.hours.innerHTML = addZero(time.hours);
        clockElements.minutes.innerHTML = addZero(time.minutes);
        clockElements.seconds.innerHTML = addZero(time.seconds);
    }

    function addZero (unit) {
        if (unit < 10) {
            unit = '0' + unit;
        }

        return unit;
    }

});
