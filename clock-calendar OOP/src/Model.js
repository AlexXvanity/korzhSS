'use strict';

class Model {
    constructor() {}
    getAppData (clickType) {
        let view = new View(),
            data = '';

        if (view.isYourSate('clock')) {
            data = this.getClockData(view);
        } else if (view.isYourSate('calendar')) {
            data = this.getCalendarData(view);
        }

        return data;
    }
    switchState (view) {
        if (view.isYourSate('clock')) {
            view.setState('calendar');
        } else {
            view.setState('clock');
        }
    }
    getClockData (view) {
        let clock = new Clock(),
            data = '';

        if (view.isYourFormat('short')) {
            data = clock.getFullTime();
        } else {
            data = clock.getShortTime();
        }

        return data;
    }
    getCalendarData (view) {
        let calendar = new Calendar();
            data = '';

        if (view.isYourFormat('short')) {
            data = calendar.getFullDate();
        } else {
            data = calendar.getShortDate();
        }

        return data;
    }
}
