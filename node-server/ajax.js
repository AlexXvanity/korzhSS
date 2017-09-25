'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let btngetTimeFromServer = document.querySelector('.get-time-btn'),
        btngetDateFromServer = document.querySelector('.get-date-btn'),
        timeContainer = document.querySelector('.time'),
        dateContainer = document.querySelector('.date');

    btngetTimeFromServer.addEventListener('click', () => {
        getDateFromServer(render, '/time', timeContainer);
    }, false);

    btngetDateFromServer.addEventListener('click', () => {
        getDateFromServer(render, '/date', dateContainer);
    }, false);

    function getDateFromServer (render, uri, container) {
        let ajax = new XMLHttpRequest(),
            body= '';

        ajax.open('GET', uri, true);

        ajax.addEventListener('readystatechange', () => {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    body = ajax.responseText;
                    render(body, container);
                }
            }
        }, false);

        ajax.send();
    }

    function render (text, container) {
        container.innerHTML = text;
    }
}