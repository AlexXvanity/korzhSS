'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var calendar = document.querySelector('.calendar'),
        day = document.querySelector('.day'),
        month =  document.querySelector('.month'),
        year = document.querySelector('.year');

        generateCalendar();

    calendar.addEventListener('click', switchFormat);

    function generateCalendar () {
        var calendarElements = {},
            fullDate = {},
            date = new Date();

        fullDate = generateFullDate(date);
        calendarElements = getCalendarElements();

        addCalendar(calendarElements, fullDate);
    }

    function generateFullDate (currentDate) {
        var fullDate = {};

        fullDate.day = currentDate.getDate();
        fullDate.month = currentDate.getMonth();
        fullDate.year = currentDate.getFullYear();

        return fullDate;
    }

    function getCalendarElements () {
        var calendarElements = {};

        calendarElements.day = day;
        calendarElements.month = month;
        calendarElements.year = year;

        return calendarElements;
    }

    function addCalendar (calendarElements, fullDate) {
        calendarElements.day.innerHTML = addZero(fullDate.day);
        calendarElements.month.innerHTML = addZero(fullDate.month);
        calendarElements.year.innerHTML = addZero(fullDate.year);
    }

    function switchFormat () {
        this.classList.toggle('eu-format');
        if (this.classList.contains('eu-format')) {
            this.insertBefore(month, calendar.firstChild);

            year.innerHTML = year.innerHTML.slice(2);
        } else {
            this.insertBefore(day, calendar.firstChild);

            year.innerHTML = (new Date()).getFullYear();
        }
    }

    function addZero (unit) {
        if (unit < 10) {
            unit = '0' + unit;
        }

        return unit;
    }
});
