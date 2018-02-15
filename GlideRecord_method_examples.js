// EXAMPLE USE OF addEncodedQuery();
var queryString = 'category=inquiry^active=true^opened_by=6816f79cc0a8016401c5a33be04be441'
var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery(queryString);
incidentGR.query();
while(incidentGR.next()) {
    gs.print(incidentGR.number);
}


// EXAMPLE USE OF newRecord
var newIncident = new GlideRecord('incident'); // because we want to create a new incident record
newIncident.newRecord(); //will initialize the record for us, set any default values, and generate sys_id
newIncident.short_description = 'This incident was created from a background script'; // set some fields
newIncident.insert();  // this will insert the new incident into the database

// insert() will actually return the sys_id if we assign it to a variable!  example: 
var newIncident = new GlideRecord('incident');
newIncident.newRecord();
newIncident.short_description = 'This incident was created from a background script';
var newIncidentSysID = newIncident.insert();
gs.print(newIncidentSysID); // will print the sys_id of the newly created incident

// If we wanted to create five new incidents...
var newIncidents = [];
var counter = 1;
var incidentGR = new GlideRecord('incident');
while (counter <= 5) {
    incidentGR.newRecord();
    incidentGR.short_description = 'Incident #' + counter;
    counter++;
    newIncidents.push(incidentGR.insert());
}
gs.print(newIncidents);



// DELETING RECORDS (deleteRecord())
// if deleting in background script, recommended that you print the records to the screen to verify they are the right ones:
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('short_description', 'Incident #3');
incidentGR.query();
while(incidentGR.next()) {
    gs.print(incidentGR.number + 'has ' + incidentGR.short_description);
}
// then once you've verified, you can change the while to delete them:
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('short_description', 'Incident #3');
incidentGR.query();
while(incidentGR.next()) {
    incidentGR.deleteRecord();
}



// ORDERING with orderBy()
var incidentGR = new GlideRecord('incident');
incidentGR.orderBy('short_description');
incidentGR.query();
while(incidentGR.next()) {
    gs.print(incidentGR.number + ' : ' + incidentGR.short_description);  
}
// all of the incidents that are printed should be in alphabetical order with this example
// if we wanted descending order, we would use orderByDesc() instead. 



// setLimit() 
var problemGR = new GlideRecord('problem');
problemGR.setLimit(5);
problemGR.query();
while(problemGR.next()) {
    gs.print(problemGR.number);
}
// can also be combined with orderBy(), for example to get the first five records in order:
var problemGR = new GlideRecord('problem');
problemGR.orderBy('short_description');
problemGR.setLimit(5);
problemGR.query();
while(problemGR.next()) {
    gs.print(problemGR.short_description);
}



// canCreate() - canRead() - canWrite() - canDelete()
// checks if a user can CRUD:
var problemGR = new GlideRecord('problem');
problemGR.query();
if(problemGR.canCreate() && problemGR.canRead() && problemGR.canWrite && problemGR.canDelete()) {
    gs.print('I have access to create, read, write, and delete!');
}



// getRowCount() - this will count the rows in a table
var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.getRowCount());



// hasNext() - returns a boolean value if there is another record (maybe even a single record) in the array like object. does NOT perform the iteration like 'next'
var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.hasNext());  // this will return true because we know there are incidents in the incident table
//another example: this will not return anything because hasNext does not iterate!
var incidentGR = new GlideRecord('incident');
incidentGR.query();
if(incidentGR.hasNext()) {
    gs.print(incidentGR.number);
}
// change hasNext() to next(), and it returns true: 
var incidentGR = new GlideRecord('incident');
incidentGR.query();
if(incidentGR.next()) {
    gs.print(incidentGR.number);
}
// Testing with a false
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority, 0'); // we know that there are no records with a priority of zero...
incidentGR.query();
gs.print(incidentGR.hasNext()); // returns false



// get()  -- will return one record
var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010020');  // will work as long as this number is unique, but usually use sys_id
gs.print(incidentGR.number);



// getLink()  -- retrieve a link to the current glide record
var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010020');
gs.print(incidentGR.getLink()); // we will get a link printed to the screen for the incident, which we can add to the end of the url to go directly to the incident



// deleteMultiple() -- delete multiple records
// in this example we use an encodedQuery to delete all records whose short description contains a string of 'incident #'
// LOG THEM FIRST, so you can check what is returned before deleting! (didn't do that here)
var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery('short_descriptionLIKEIncident #');
incidentGR.deleteMultiple();  // we do NOT need to add the query method or the while loop



// UPDATING RECORDS with update()
// using incident number INC0010021 , which currently has an urgency of '3'
var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010021');
incidentGR.urgency = 2;
incidentGR.update(); // this saves the changes to the database, the urgency of the incident is now 2
// another update example: we want to update all of the incidents that have an urgency of 2, and change them to three
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('urgency', 2);
incidentGR.query();
while(incidentGR.next()) {
    incidentGR.urgency = 3;
    incidentGR.update();
}



// addNullQuery() -- accepts one argument (field we want to apply a null query to)
// this example will find all incidents that DO NOT have a short description
var incidentGR = new GlideRecord('incident');
incidentGR.addNullQuery('short_description');
incidentGR.query();
while(incidentGR.next()) { 
    gs.print(incidentGR.number);
}
// addNotNullQuery() does the opposite