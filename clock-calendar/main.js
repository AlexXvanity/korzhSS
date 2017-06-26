'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var clockCalendar = document.querySelector('.clock-calendar'),
        appType = 'clock',
        timeFormat = 'short',
        dateFormat = 'eu-date',
        timerId = 0;

    clockCalendar.addEventListener('click', changeView);
    clockCalendar.addEventListener('contextmenu', changeView);

    refreshTime();
    timerId = setInterval(refreshTime, 1000);

    function changeView (event) {
        event.preventDefault();
        if (event.type === 'contextmenu') {
            if (appType === 'clock') {
                appType = 'calendar';

                clearInterval(timerId);
                refreshDate();
                timerId = setInterval(refreshDate, 1000);
            } else {
                appType = 'clock';

                clearInterval(timerId);
                refreshTime();
                timerId = setInterval(refreshTime, 1000);
            }
        }
        if (event.type === 'click') {
            if (appType === 'clock') {
                if (timeFormat === 'short') {
                    timeFormat = 'full';
                    switchFormat(timeFormat);
                } else {
                    timeFormat = 'short';
                    switchFormat(timeFormat);
                }
            } else {
                if (dateFormat === 'eu-date') {
                    dateFormat = 'ua-date';
                    switchFormat(dateFormat);
                } else {
                    dateFormat = 'eu-date';
                    switchFormat(dateFormat);
                }
            }
        }
    }

    function refreshTime () {
        var time = getTime(timeFormat);
        clockCalendar.innerHTML = time;
    }

    function refreshDate () {
        var date = getDate(dateFormat);
        clockCalendar.innerHTML = date;
    }

    function getDate (type) {
        var currentDate = new Date(),
            day = 0,
            month = 0,
            year = 0,
            fullDate = '';

        if (type === 'eu-date') {
            day = addZero(currentDate.getDate());
            month = addZero(currentDate.getMonth());
            year = addZero(currentDate.getFullYear());

            fullDate = `${month}.${day}.${year}`;
            fullDate = fullDate.slice(0, fullDate.indexOf('2017')) + fullDate.slice(-2);
        }  else {
            day = addZero(currentDate.getDate());
            month = addZero(currentDate.getMonth());
            year = addZero(currentDate.getFullYear());

            fullDate = `${day}.${month}.${year}`;
        }

        return fullDate;
    }

    function getTime (type) {
        var currentDate = new Date(),
            hours = 0,
            minutes = 0,
            seconds = 0,
            time = '';

        if (type === 'short') {
            hours = addZero(currentDate.getHours());
            minutes = addZero(currentDate.getMinutes());

            time = `${hours}:${minutes}`;
        }  else {
            hours = addZero(currentDate.getHours());
            minutes = addZero(currentDate.getMinutes());
            seconds = addZero(currentDate.getSeconds());

            time = `${hours}:${minutes}:${seconds}`;
        }

        return time;
    }

    function switchFormat (format) {
        var result = 0;

        if (format === 'full' || format === 'short') {
            result = getTime(format);
            clockCalendar.innerHTML = result;
        } else {
            result = getDate(format);
            clockCalendar.innerHTML = result;
        }
    }
    
    function addZero (unit) {
        if (unit < 10) {
            unit = '0' + unit;
        }

        return unit;
    }
});
