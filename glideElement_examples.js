// getDisplayValue()

// direct access
var incidentGR = new GlideRecord('incident');
incidentGR.get('46f4f4dfa9fe198100063e60278f76ec');
gs.print(incidentGR.caller_id);

// goString()
var incidentGR = new GlideRecord('incident');
incidentGR.get('46f4f4dfa9fe198100063e60278f76ec');
gs.print(incidentGR.caller_id.toString());

// getDisplayValue()
var incidentGR = new GlideRecord('incident');
incidentGR.get('46f4f4dfa9fe198100063e60278f76ec');
gs.print(incidentGR.caller_id.getDisplayValue());
/*
*** Script: 5137153cc611227c000bbd1bd8cd2005
*** Script: 5137153cc611227c000bbd1bd8cd2005
*** Script: Fred Luddy
*/ 





// getHTMLValue() -- gets the HTML value of a field
var kbArticleGR = new GlideRecord('kb_knowledge');
kbArticleGR.get('e97ee81eff6002009b20ffffffffffe0')  // sys ID for a knowledge article
gs.print(kbArticleGR.text.getHTMLValue());
/*
=>
*** Script: <h2>Installing the Eclipse Plugin</h2> <p>Android offers a custom plugin for the Eclipse IDE, called Android Development Tools (ADT). This plugin provides a powerful, integrated ...
*/ 





// getJournalEntry()
var incidentGR = new GlideRecord('incident');
incidentGR.get('46f4f4dfa9fe198100063e60278f76ec'); // an incident sys_id
gs.print(incidentGR.comments.getJournalEntry(-1));  // will print all of the comments stored in the journal field
/*
returns the comments and metadata associated with it
=>
*** Script: 02-22-2018 14:57:37 - James Hughes (Additional comments)
another test

02-22-2018 14:57:17 - James Hughes (Additional comments)
testing comments
*/
// if we put '1' in as teh argument, it will return the first comment. 





// nil()  -- tells you if a value is nil
var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()) {
    if(incidentGR.short_description.nil()) {
        gs.print(incidentGR.number);
    }
}
// will return the incident numbers of all incidents without a short description