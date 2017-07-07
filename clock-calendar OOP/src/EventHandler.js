'use strict';

class  EventHandler {
    constructor() {
        this.eventStore = {};
    }
    saveEvent (key, event) {
        this.eventStore[key] = event;
    }
    callEvent (key) {
        this.eventStore[key]();
    }
}
