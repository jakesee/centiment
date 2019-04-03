import moment from 'moment'
var date:number = Date.now();
var dateString:string = moment(date).format('LLLL');

console.log('It is ' + dateString);
