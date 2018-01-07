"use strict";
$(document).ready(function () {
    $(".calendar__month").fullCalendar({
        weekends: false,
        googleCalendarApiKey: "AIzaSyCbmM8xX6md1IjtFGGXTgDjSA9iNI34_-k",
        events: {
            googleCalendarId: "lubcon.org_qi5qeu5bm83puvc9kfj9mfle74@group.calendar.google.com",
        },
        height: 500,

    });
    $(".calendar__list").fullCalendar({
        defaultView: "listYear",
        weekends: false,
        googleCalendarApiKey: "AIzaSyCbmM8xX6md1IjtFGGXTgDjSA9iNI34_-k",
        events: {
            googleCalendarId: "lubcon.org_qi5qeu5bm83puvc9kfj9mfle74@group.calendar.google.com",
        },
        header: 0,
        height: 450,

    });
});
