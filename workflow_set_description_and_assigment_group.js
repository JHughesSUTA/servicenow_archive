// Set the task description based on the request type
task.short_description = "Fulfillment task assigned to for " + current.variables.request_type.getDisplayValue();

var grp = new GlideRecord('u_general_request_items');    
grp.addQuery('sys_id', current.variables.request_type);   // second argument is just the name of the field
grp.query();

if (grp.next()) {
  task.assignment_group = grp.u_assignment_group;    // name of the reference field on the form
}