var xmlString = '<xml><incident><active>true</active><activity_due>2017-05-25 17:40:31</activity_due><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to/><assignment_group/><caller_id display_value="Mark Miller">34a58e7d4f6a42009c624a318110c748</caller_id></incident></xml>';

var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);   
gs.print(xmlDoc.getNodeText('//active')); // print text found within active node
// => true 




// we can also create a new element on the XML document

var xmlString = '<xml><incident><active>true</active><activity_due>2017-05-25 17:40:31</activity_due><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to/><assignment_group/><caller_id display_value="Mark Miller">34a58e7d4f6a42009c624a318110c748</caller_id></incident></xml>';

var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);   
xmlDoc.createElement('pet');  // creates pet element
gs.print(xmlDoc); // we will see that pet node is there when we print




// we can also add text to an element when we create it with 'createElementWithTextValue'
var xmlString = '<xml><incident><active>true</active><activity_due>2017-05-25 17:40:31</activity_due><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to/><assignment_group/><caller_id display_value="Mark Miller">34a58e7d4f6a42009c624a318110c748</caller_id></incident></xml>';

var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);   
xmlDoc.createElementWithTextValue('pet', 'Oscar');  // creates pet element, with text value 'oscar'
gs.print(xmlDoc); 






// getFirstNode method
var xmlString = '<xml><incident><active>true</active><activity_due>2017-05-25 17:40:31</activity_due><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to/><assignment_group/><caller_id display_value="Mark Miller">34a58e7d4f6a42009c624a318110c748</caller_id></incident></xml>';

var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);   
gs.print(xmlDoc.getFirstNode('/xml/incident')); // prints everything within xml node
// if we do gs.print(xmlDoc.getFirstNode('xml/incident/active'));   it will print the active node

