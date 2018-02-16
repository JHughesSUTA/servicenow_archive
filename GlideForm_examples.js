// getValue() -- gets a value for a form field 
var fieldValue = g_form.getValue('category'); // this will pull the current value of category on the form and assign it to the variable fieldValue
alert(fieldValue);
// if we run this while looking at an incident, it will alert teh category of the incident.



// setValue  -- sets a vlue for a form field
// in this example we want to set the category field to 'Software'
g_form.setValue('category', 'software');
// first argument is the field, second argument is the value we want to set



// clearValue() -- clears a field value
// in this example we want to clear the category field
g_form.clearValue('category');
// the category (for this incident) will then be 'none'



// save() -- simply saves the current record
g_form.save();



// setDisabled() -- takes two arguments: name of field that we want to set, and a boolean (whether we want to set the field to disabled or not disabled)
// this example sets the category field to disabled:
g_form.setDisabled('category', true);




// hideRelatedLists() & showRelatedLists() — will hide/show the related lists found at the bottom of a form view.
g_form.showRelatedLists();
//  or 
g_form.hideRelatedLists();



// isMandatory() -- will return true or false depending on if the current field is set to mandatory
alert(g_form.isMandatory('category')); // this will alert if the category field is mandatory on the incident we have open



// isNewRecord() -- will return a boolean wheter the current record is a new record or not
var isNewRecord = g_form.isNewRecord();
alert('Is this a new record? ' + isNewRecord); 
// this pops up an alert stating 'Is this a new record? Flase' when entered on an existing record



// addInfoMessage() & addErrorMessage() -- similar to the glide system methods, but happens on the client side
g_form.addInfoMessage('Hello 201 students!');
g_form.addErrorMessage('Goodbye 201 students!');



// clearMessages() will clear the info/error messagse
g_form.clearMessages(); 



// getLabelOf() -- takes the name of the field and returns the field label
alert(g_form.getLabelOf('category'));
// if we run on an incident the alert will say 'Category' (capitalized), which is the label.



// getTableName() -- 
var tableName = g_form.getTableName();
alert('Table: ' + tableName);