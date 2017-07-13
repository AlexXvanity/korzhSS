'use strict';

class Clock {
    getFullTime () {
        let currentDate = new Date(),
            hours = 0,
            minutes = 0,
            seconds = 0,
            time = '';

        hours = this.addZero(currentDate.getHours());
        minutes = this.addZero(currentDate.getMinutes());
        seconds = this.addZero(currentDate.getSeconds());

        time = `${hours}:${minutes}:${seconds}`;

        return time;
    }
    getShortTime () {
        let currentDate = new Date(),
            hours = 0,
            minutes = 0,
            seconds = 0,
            time = '';

        hours = this.addZero(currentDate.getHours());
        minutes = this.addZero(currentDate.getMinutes());

        time = `${hours}:${minutes}`;

        return time;
    }

    addZero (unit) {
        if (unit < 10) {
            unit = '0' + unit;
        }

        return unit;
    }
}
