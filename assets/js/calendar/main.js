import { Calendar, FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';

document.addEventListener("DOMContentLoaded", function() {
    var calendarEl = document.querySelector("#calendar");

    var calendar = new FullCalendar(calendarEl, {
        plugins: [ 'interaction', 'dayGridPlugin' ],
        defaultDate: '2020-05-07',
    });

    calendar.render();
});