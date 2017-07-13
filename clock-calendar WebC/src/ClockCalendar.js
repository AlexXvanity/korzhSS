'use strict';

class ClockCalendar extends HTMLElement {
    constructor() {
        super();
    }
    start () {
        this.state  = 'clock';
        this.format = 'short';
        this.clock = new Clock();
        this.calendar = new Calendar();
        this.root = this.createShadowRoot();
    }
    init () {
        this.start();
        this.initializeEvents();
        this.root.innerHTML = this.clock.getShortTime();
        this.refresh();
    }
    initializeEvents () {
        this.addEventListener('click', this.switchFormat);
        this.addEventListener('contextmenu', this.switchState);
    }
    refresh () {
        setInterval(()=> this.getCurrentData(this.format), 1000);
    }
    getCurrentData (currentState) {
        let obj = {
            short: () => {
               this.root.innerHTML = this.clock.getShortTime();
           },
           full: () => {
               this.root.innerHTML = this.clock.getFullTime();
           },
           eu: () => {
               this.root.innerHTML = this.calendar.getShortDate();
           },
           ua: () => {
               this.root.innerHTML = this.calendar.getFullDate();
           }
       };

       return obj[currentState]();
    }
    switchState (event) {
        event.preventDefault();

        if (this.isYourState('clock')) {
            this.state = 'calendar';
            this.format = 'eu';
            this.root.innerHTML= this.calendar.getShortDate();
        } else {
            this.state = 'clock';
            this.format = 'short';
            this.root.innerHTML = this.clock.getShortTime();
        }
    }
    switchFormat () {
        if (this.isYourState('clock')) {
            this.switchClockFormat();
        } else {
            this.switchCalendarFormat();
        }
    }
    switchClockFormat () {
        if (this.isYourFormat('short')) {
            this.format = 'full';
            this.root.innerHTML = this.clock.getFullTime();
        } else {
            this.format = 'short';
            this.root.innerHTML = this.clock.getShortTime();
        }
    }
    switchCalendarFormat () {
        if (this.isYourFormat('eu')) {
            this.format = 'ua';
            this.root.innerHTML = this.calendar.getFullDate();
        } else {
            this.format = 'eu';
            this.root.innerHTML = this.calendar.getShortDate();
        }
    }
    isYourState (_state) {
        return this.state === _state;
    }
    isYourFormat (_format) {
        return this.format === _format;
    }
}
