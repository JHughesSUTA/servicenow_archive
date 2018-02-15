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