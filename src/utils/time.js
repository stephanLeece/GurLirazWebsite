import moment from 'moment';

function datesDiff(fromDate, toDate, type) {
    const a = moment(fromDate);
    const b = moment(toDate);
    return Math.abs(a.diff(b, type));
}

export function daysBetweenDates(fromDate, toDate) {
    return datesDiff(fromDate, toDate, 'days');
}

export function monthsBetweenDates(fromDate, toDate) {
    return datesDiff(fromDate, toDate, 'months');
}

export function dateHasPassed(date) {
    return moment().isAfter(moment(date).format('YYYY-MM-DD'));
}

export function willBeBusinessDay(date) {
    return date.weekday() !== 0;
}

export function isInSameMonth(minDate, MaxDate) {
    return minDate.isSame(MaxDate, 'month');
}

