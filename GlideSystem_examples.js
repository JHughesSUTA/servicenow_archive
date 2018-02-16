// gs.print -- takes a string and prints it to the screen
var helloText = 'Hello World!';
gs.print(helloText);



//gs.log -- logs something to the log. accepts two arguments('string_we_want_to_log', 'source')
gs.log('This is a log message', 'marks_log');



//gs.error -- almost identical to log method
gs.error('I am an error message');



//gs.warn -- same as previous two, but message goes to the warnings
gs.warn('I am a warn message');



// gs.addErrorMessage - puts an error message up on the screen
gs.addErrorMessage('Welcome to ServiceNow 201: Development! This is an error message.');



// gs.addInfoMessage - puts an info message up on the screen
gs.addInfoMessage('Welcome to ServiceNow 201: Development! This is an info message.');



// gs.beginningOfLastMonth()  -- will return the first day of the previous month:
gs.print(gs.beginningOfLastMonth());  // this example just prints what is returned



// gs.generateGUID() -- will generate a 
gs.print(gs.generateGUID());  // this example just prints the generated GUID



// gs.getMessage() -- gets a translated version of the argument (key) from the sys_ui_message (but translations must be in the table)
gs.print(gs.getMessage('ago'));
//in this example there were translated words for 'ago' in the table -- we changed our language to german in preferences and then ran the script from background scipts; 'her' was returned, which is the German word



// gs.getProperty() -- get a system property (from sys_properties table)
// for this example we created system property called servicenow.201.hello.world with the string 'World!'
gs.print('Hello ' + gs.getProperty('servicenow.201.hello.world'));
// this printed 'Hello World!'



// gs.setProperty() -- sets a property (sys_properties table) -- 2 arguments 
// set the property:
gs.setProperty('servicenow.201.hello.world', 'testing');
// if we run this below again after setting the property:
gs.print('Hello ' + gs.getProperty('servicenow.201.hello.world'));
// then 'Hello testing' is printed. 



// gs.getUser()
gs.print(gs.getUser());
// this is returned: com.glide.sys.User@501169 -- which is a string used within ServiceNOw
// if we wanted the display name of the current user, we can chain on getDisplayName():
gs.print(gs.getUser().getDisplayName());
// 'James Hughes' is returned
gs.print(gs.getUser().getFirstName());
// 'James' is returned
gs.print(gs.getUser().getLocation());
// returned '2e4947740f801300daa206bce1050e72' -- this is because location is a referenced field on the user table (this is the sys_id for the location)
gs.print(gs.getUser().getUserRoles());
// returned 'admin,knowledge_manager,security_admin'
gs.print(gs.getUser().getUserID());




// gs. getUserID(); -- grabs the sys_id of my user record:
gs.print(gs.getUserID());
//returns 6816f79cc0a8016401c5a33be04be441 
// this can be used in queries as well! for example, if i wanted to find all incidents where the caller is myself:
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('caller', gs.getUserID());
incidentGR.query();
while(incidentGR.next()) {
    gs.print('Incident: ' + incidentGR.number);
}  // returns a list of all the records in which I'm a caller



// gs.hasRole() -- tells if user has a certain role ... accepts one argument (string value of the role)
if(gs.hasRole('itil') || gs.hasRole('admin')) {
    gs.print('The current user has ITIL or Admin');
}
// the string was returned



// gs.getSession() -- will return the session ID that is used within ServiceNow
gs.print(gs.getSession());
// returned: com.glide.sys.GlideSession@1904f00
// chaining isLoggedIn() method will return a boolean value if the user is logged in or not
gs.print(gs.getSession().isLoggedIn());



// gs.nil() -- will test whether a specific variable contains a falsey value -- doesn't have to be a string, can be an object. 
// in this example we query the incident table and for every incident that doesn't contain a short description, then we log a message saying 'this incident has no short description'
var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()) {
    if(gs.nil(incidentGR.short_description)) {
        gs.print('This incident (' + incidentGR.number + ') has no short description: ' + incidentGR.short_description);
    }
}



// gs.tableExists() -- tests if the argument is a table within the system:
gs.print(gs.tableExists('incident'));
// => true 



// gs.xmlToJSON() -- turns xml to json
var xmlString = '<root><test>Some XML</test><test1>Some more XML</test1></root>';
var json = gs.xmlToJSON(xmlString);  // we're using the value returned from xmlToJSON method and assigning it to var json
gs.print(json.root.test); // access the test property of th json object. 
// => 'Some XML'



// gs.eventQueue() -- 
// in this example we use the event created earlier (ServiceNow 201 - Hello World)
// script action example:
gs.eventQueue('servicenow.201.hello.world');  // this will run the script
// to test we can go to the script log statements and check for it


