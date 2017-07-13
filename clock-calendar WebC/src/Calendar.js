'use strict';

class Calendar {
    getFullDate () {
        let currentDate = new Date(),
            day = 0,
            month = 0,
            year = 0,
            date = '';

        day = this.addZero(currentDate.getDate());
        month = this.addZero(currentDate.getMonth());
        year = this.addZero(currentDate.getFullYear());

        date = `${day}.${month}.${year}`;

        return date;
    }
    getShortDate () {
        let currentDate = new Date(),
            day = 0,
            month = 0,
            year = 0,
            date = '';

        day = this.addZero(currentDate.getDate());
        month = this.addZero(currentDate.getMonth());
        year = this.addZero(currentDate.getFullYear());

        date = `${month}.${day}.${year}`;
        date = date.slice(0, date.indexOf('2017')) + date.slice(-2);

        return date;
    }
    addZero (unit) {
        if (unit < 10) {
            unit = '0' + unit;
        }

        return unit;
    }
}
