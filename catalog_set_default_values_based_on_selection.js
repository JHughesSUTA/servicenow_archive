/* THESE EXAMPLES ARE FROM MY DEVELOPER INSTANCE, IN WHICH I HAVE A VARIABLE SET CONTAINING VARIABLES
requester_name (reference)
requester_email (single line text)
requester_contact_number (single line text)
requester_cid (single line text)
requester_location (single line text)
*/


// SET DEFAULT NAME BASED ON CURRENT USER
javascript: gs.getUserID()


// SET DEFAULT EMAIL VALUE BASED ON USER
javascript: getLoc();
function getLoc() {
    var u = new GlideRecord('sys_user');
    if (u.get(gs.getUserID())) {
        return u.getValue('email');
    } else {
        return '';
    }
}


// SET DEFAULT CONTACT NUMBER VALUE BASED ON USER
javascript: getLoc();
function getLoc() {
    var u = new GlideRecord('sys_user');
    if (u.get(gs.getUserID())) {
        return u.getValue('mobile_phone');
    } else {
        return '';
    }
}


// SET DEFAULT LOCATION VALUE BASED ON USER
javascript: getLoc();
function getLoc() {
    var u = new GlideRecord('sys_user');
    var location_table = new GlideRecord('cmn_location');
    if (u.get(gs.getUserID())) {
        var loc_key = u.getValue('location');
    } else {
        return '';
    }
    if (location_table.get(loc_key)) {
        var loc_name = location_table.getValue('name');
        return loc_name;
    } else {
        return '';
    }
}


// SET USERNAME BASED ON USER
javascript: getLoc();
function getLoc() {
    var u = new GlideRecord('sys_user');
    if (u.get(gs.getUserID())) {
        return u.getValue('user_name');
    } else {
        return '';
    }
}