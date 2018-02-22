//GlideDateTime
var gdt = new GlideDateTime();
gs.print(gdt);

var gdt2 = new GlideDateTime('2017-05-25 12:02:30');
gs.print(gdt2);

var someTimeAgo = '2017-05-25 12:02:30';
var gdt3 = new GlideDateTime(someTimeAgo);
gs.print(gdt3);

/*
=> 
*** Script: 2018-02-22 19:55:19
*** Script: 2017-05-25 12:02:30
*** Script: 2017-05-25 12:02:30
*/

// if we print 'typeof gdt3', it would return object. It returns an object, not a string






// addDaysUTC()
var gdt = new GlideDateTime();
gs.print('Now: ' + gdt);
gdt.addDaysUTC(3);
gs.print('New value: ' + gdt); 
/*
new value is 3 days in the future
=>
*** Script: Now: 2018-02-22 19:59:36
*** Script: New value: 2018-02-25 19:59:36
*/





// addMonthsUTC()
var gdt = new GlideDateTime();
gs.print('Now: ' + gdt);
gdt.addMonthsUTC(3);
gs.print('New value: ' + gdt); 
/*
new value is 3 months in the future
=>
*** Script: Now: 2018-02-22 20:02:06
*** Script: New value: 2018-05-22 20:02:06
*/




// addYearsUTC()
// works the same way





// before()
// will test two dates and see if second date is before the first
var gdt = new GlideDateTime('2017-06-27 19:46:39');
var gdt2 = new GlideDateTime();
gs.print('is gdt before bdg2? ' + gdt.before(gdt2));
// => Script: is gdt before bdg2? true





// compareTo()
// similar to before() and after() methods, but instead of getting a boolean back,  we get:
// 0 if dates are equal
// 1 if initial date is before compare date
// -1 if initial date is after compare date
var gdt = new GlideDateTime('2017-06-27 19:46:39');
gs.print('gdt: ' + gdt);
var gdt2 = new GlideDateTime();
gs.print('gdt2: ' + gdt2);
gs.print('compare ' + gdt.compareTo(gdt2));
/*
=> 
*** Script: gdt: 2017-06-27 19:46:39
*** Script: gdt2: 2018-02-22 20:11:23
*** Script: compare -1
*/ 
var gdt = new GlideDateTime('2017-06-27 19:46:39');
gs.print('gdt: ' + gdt);
var gdt2 = new GlideDateTime();
gs.print('gdt2: ' + gdt2);
gs.print('compare ' + gdt.compareTo(gdt2));
/*
=> 
*** Script: gdt: 2017-06-27 19:46:39
*** Script: gdt2: 2018-02-22 20:13:52
*** Script: compare 1
*/ 






// subtract() 
// shows the difference in time (days, minutes seconds) between two dates
var gdt = new GlideDateTime('2017-06-27 19:46:39');
gs.print('gdt: ' + gdt);
var gdt2 = new GlideDateTime();
gs.print('gdt2: ' + gdt2);
var difference = GlideDateTime.subtract(gdt, gdt2);
gs.print('difference: ' + difference.getDisplayValue());
/*
=>
*** Script: gdt: 2017-06-27 19:46:39
*** Script: gdt2: 2018-02-22 20:17:33
*** Script: difference: 240 Days 30 Minutes
*/ 
// note: seconds are NOT evaluated with this method