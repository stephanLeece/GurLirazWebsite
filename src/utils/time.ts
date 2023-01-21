import moment from 'moment';

function datesDiff(fromDate: string, toDate: string, type: any) {
    const a = moment(fromDate);
    const b = moment(toDate);
    return Math.abs(a.diff(b, type));
}

export function daysBetweenDates(fromDate: string, toDate: string) {
    return datesDiff(fromDate, toDate, 'days');
}

export function monthsBetweenDates(fromDate: string, toDate: string) {
    return datesDiff(fromDate, toDate, 'months');
}

export function dateHasPassed(date: string) {
    return moment().subtract(1, 'd').isAfter(moment(date).format('YYYY-MM-DD'));
}

export function willBeBusinessDay(date: any) {
    return date.weekday() !== 0;
}

export function isInSameMonth(minDate: any, MaxDate: any) {
    return minDate.isSame(MaxDate, 'month');
}

