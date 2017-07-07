'use strict';

class View {
    constructor(eventHandler) {
        this.state = 'clock';
        this.format = 'short';
        this.element = document.querySelector('.clock-calendar');
        this.eventHandler = eventHandler;
    }
    isYourSate (_state) {
        return _state === this.state;
    }
    isYourFormat (_format) {
        return _format === this.format;
    }
    setState (_state) {
        this.state = _state;
    }
    initListeners () {
        this.element.addEventListener('click', this.publishEvent);
        this.element.addEventListener('contextmenu', this.publishEvent);
    }
    publishEvent (event) {
    }
    render () {

    }
}
