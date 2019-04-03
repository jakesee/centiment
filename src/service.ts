import * as moment from 'moment';
import * as wait from 'wait-for-stuff';

var start:number = Date.now();

var count = 0;
do {
	var seconds = Math.random();
	wait.for.time(seconds);
	console.log(moment(Date.now()).format('LL LTS'));
	var diff = Math.abs(moment(Date.now()).diff(moment(start), 's'));
} while(diff < 30);
