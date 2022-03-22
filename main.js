var Calendar = tui.Calendar;
var calendar = new Calendar('#calendar', {
    defaultView: 'month',
    taskView: true,
    template: {
      monthDayname: function(dayname) {
        return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
      }
    }
  });


calendar.createSchedules([
    {
        id: '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'time',
        dueDateClass: '',
        start: '2018-06-07T22:30:00+09:00',
        end: '2018-06-19T02:30:00+09:00'
    },
    {
        id: '2',
        calendarId: '1',
        title: 'second schedule',
        category: 'time',
        dueDateClass: '',
        start: '2018-06-18T17:30:00+09:00',
        end: '2018-06-19T17:31:00+09:00',
        isReadOnly: true    // schedule is read-only
    }
]);


calendar.on({
    'clickSchedule': function(e) {
        console.log('clickSchedule', e);
    },
    'beforeCreateSchedule': function(e) {
        console.log('beforeCreateSchedule', e);
        // open a creation popup
    },
    'beforeUpdateSchedule': function(e) {
        console.log('beforeUpdateSchedule', e);
        e.schedule.start = e.start;
        e.schedule.end = e.end;
        cal.updateSchedule(e.schedule.id, e.schedule.calendarId, e.schedule);
    },
    'beforeDeleteSchedule': function(e) {
        console.log('beforeDeleteSchedule', e);
        cal.deleteSchedule(e.schedule.id, e.schedule.calendarId);
    }
});
