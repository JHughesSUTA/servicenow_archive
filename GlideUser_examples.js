// firstName, lastName, userID properties - just properties on the object, access by  .property_name
alert('Hello ' + g_user.firstName + ' ' + g_user.lastName + '. Your user ID is: ' + g_user.userID );




// getFullName() -- shortcut for g_user.firstName + ‘ ‘ + g_user.lastName
alert('Hello ' + g_user.getFullName());


// hasRoles() -- returns boolean if user has any roles or not
alert('Do you have any roles? ' + g_user.hasRoles());



// hasRole() -- tells you if user has a particular role - has argument passed in with role string\
alert('Do you have the ITIL role?' + g_user.hasRole('itil'));



// userName -- PROPERTY 
alert('Your username is: ' + g_user.userName);