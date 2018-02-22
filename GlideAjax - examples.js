/* 
EXAMPLE #1

When an incident form loads, we want GlideAjax to reach out to the server, get a string value from a script include ('hello world'), and sent it back to us. When we receive it on client side, we will update short description of current incident.

CREATE THE SCRIPT INCLUDE FIRST
script includes > new 
name = ServiceNow201GlideAjax (name important because we use it when we reference our script include in the GlideAjax script)
*/
 
// note: a lot of this code was generated automatically when creating the script include
var ServiceNow201GlideAjax = Class.create();
ServiceNow201GlideAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    sayHello: function() {   // semicolon because it's a property in a JavaScript object
        return 'Hello world!';
    },
    
    type: 'ServiceNow201GlideAjax'
});

/* 
submit it
navigate - Incidents(All) > hamburger > configure > client scripts
create NEW - name 'onLoad Hello', type: 'onLoad' (some js is auto generated)
*/

function onLoad() {
   //Type appropriate comment here, and begin script below
   var ga = new GlideAjax('ServiceNow201GlideAjax');
   ga.addParam('sysparm_name', 'sayHello');
   ga.getXML(ajaxProcessor);
}

function ajaxProcessor(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer');
    g_form.setValue('short_description', answer);
}

// now go back to incidents, and when an incident is opened you will see that the short description is overriden to 'hello world'








// -------------------------

/*
We'll use a UI page where we'll write our GlideAjax code, and then leverage the same script include from previous - but providing a new method that will be called

The goal of this example is to log the status of a specific incident every 5 seconds to the browsers console using the UI page
*/



// add the method to the script include from previous exercise
var ServiceNow201GlideAjax = Class.create();
ServiceNow201GlideAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getIncidentStatus: function() {
        var incidentNumber = this.getParameter('sysparm_incident_number'); // gets the incident number returned to us
        if(!gs.nil(incidentNumber)) {     // if incident number is not null ...
            var incidentGR = new GlideRecord('incident');  //glide record query where we get the incident with the number that was passed to us
            incidentGR.get('number', incidentNumber);
            return incidentGR.state.getDisplayValue();  //just returns the incident state
        } else {
            return 'No incident was found';
        }
    },

    sayHello: function() {   // semicolon because it's a property in a JavaScript object
        return 'Hello world!';
    },
    
    type: 'ServiceNow201GlideAjax'
});


/*
now we create the UI page
navigate to UI Pages > new -- name: 'ServiceNow 201 GlideAjax Example'
*/

//html field
// we added <h1>Example 2<h1> to this field -- not really necessary since we're not working with the html on this example


// Client Script:
var checkIncident = setInterval(function() {
    processRequest();
}, 5000); 
// setInterval is a method used to call a function at set intervals
// it takes two arguments: an anonymous function where we place the code we want to run, and the interval in milliseconds


function processRequest() {
    var ga = new GlideAjax('ServiceNow201GlideAjax');   // initialize our glide ajax
    ga.addParam('sysparm_name', 'getIncidentStatus');   // add parameter for method name
    ga.addParam('sysparm_incident_number', 'INC0000011');         // pass in another parameter (we just took a random incident number)
    ga.getXML(ajaxProcessor);               // provides the callback
}

//create the callback function:
function ajaxProcessor(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer');   // get answer from xml node
    console.log('status: ' + answer);       // log the status to the console. 
}

// save/submit







/*
EXAMPLE #3 
We'll use another UI page and grab a number of incidents, and print them to the console.
*/ 



// we add another method (getLatestIncidents) to our existing script include:
var ServiceNow201GlideAjax = Class.create();
ServiceNow201GlideAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getIncidentStatus: function() {
        var incidentNumber = this.getParameter('sysparm_incident_number'); // gets the incident number returned to us
        if(!gs.nil(incidentNumber)) {     // if incident number is not null ...
            var incidentGR = new GlideRecord('incident');  //glide record query where we get the incident with the number that was passed to us
            incidentGR.get('number', incidentNumber);
            return incidentGR.state.getDisplayValue();  //just returns the incident state
        } else {
            return 'No incident was found';
        }
    },

    getLatestIncidents: function() {
        var incidents = [];             //create array that will hold our incidents
        var limit = parseInt(this.getParameter('sysparm_limit'));   // new variable where we will grab a limit passed to us from the client, which we will use in a setLimit method for glideRecord.
        if(!gs.nil(limit) && typeof limit == 'number') {    // make sure that there is a limit, and that the type is a number
            var incidentGR = new GlideRecord('incident');   // start glide record
            incidentGR.orderByDesc('sys_created_on');       // order by sys_created_on
            incidentGR.setLimit(limit);                     // set limit to limit passed to us
            incidentGR.query();
            while(incidentGR.next()) {                 // create a blank object, and then create properties on the object and set the values to the incident values
                var record = {};
                record.number = incidentGR.number.getDisplayValue();
                record.sysID = incidentGR.sys_id.getDisplayValue();
                record.shortDescription = incidentGR.short_description.getDisplayValue();
                incidents.push(record);  // push object to the incidents array
            }
            return new JSON().encode(incidents); // returns the array, encoded into json (using the json API in ServiceNow)
        } else {
            return 'Something \'t right...';
        }
    },

    sayHello: function() {   // semicolon because it's a property in a JavaScript object
        return 'Hello world!';
    },
    
    type: 'ServiceNow201GlideAjax'
});


// create the UI Page:
// Name: ServiceNow 201 GlideAjax Example 3
// put <h1>Example 3</h1> in the html -- not necessary but just to show on the page

//client script: 
var ga = new GlideAjax('ServiceNow201GlideAjax');   // initialize glide ajax API
ga.addParam('sysparm_name', 'getLatestIncidents');  // call getLatestincidents method
ga.addParam('sysparm_limit', '5');      // pass in a value of 5 for limit so it pull s5 latest incidents
ga.getXML(ajaxProcessor);   // add getXML method passing in ajaxProcessor callback

function ajaxProcessor(response) {    // passing in the response
    console.log('Response payload: ' + response);  // log response to console
    var answer = response.responseXML.documentElement.getAttribute('answer');  // grab the answer from the response 
    console.log('Answer: ' + answer);  // log the answer
    var json = answer.evalJSON();   // parse the json assigned to a variable
    console.log('JSON: ' + json);  // log it
    console.log(json[0].shortDescription);  // log the short description of the first incicent within the json.
}

