// Script for validating calendar to not allow past dates for a catalog item
// the field message is not showing at this point - may have a bug.

function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

  var today = new Date();  
  var end = new Date(newValue);  
  var intToday = (today.getUTCFullYear() * 10000) + (today.getUTCMonth() * 100) + today.getUTCDate();  
  var intEnd = (end.getUTCFullYear() * 10000) + (end.getUTCMonth() * 100) + end.getUTCDate();  
  //clear the message  
  g_form.hideFieldMsg(control.name);  
  
  //Use UTC conversion, and verify each part is appropriate  
  if (intEnd >= intToday) {  
  //this is valid, do nothing  
  } else {  
    g_form.showFieldMsg(control.name,'End date must be in the future.','error');  
    g_form.clearValue(control.name);  
  }  
      
}