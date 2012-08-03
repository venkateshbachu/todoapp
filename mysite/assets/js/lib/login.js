jQuery.noConflict();

jQuery(document).ready(function() {
	// Set cursor focus on the SDR Number text field.
	document.getElementById('rep_num').focus();
	// Disable the Login button until they agree to the Terms.
	if (!jQuery(".termsChecked").attr("checked")) {
		// Only Disable the Login button if the Terms isn't already checked.
		jQuery(".login").attr("disabled", "disabled");
		jQuery(".login").css('color', '#dddddd');
		jQuery(".login").css('background-color', '#CCCC99');
	}
	
	// Set a toggle function on the Terms checkbox. This will enable/disable
	// the Login Submit button when they check/uncheck the box.
	jQuery(".termsChecked").click(function() {
		var checked = this.checked;
		if (checked) {
			// When Terms is checked, remove the disabled property on the Login
			// button.
			jQuery(".login").removeAttr("disabled");
			jQuery(".login").css('color', '#000');
			
		} else {
			// When Terms is unchecked, set the disabled property on the Login
			// button.
			jQuery(".login").attr("disabled", "disabled");
			jQuery(".login").css('color', '#dddddd');
			jQuery(".login").css('background-color', '#CCCC99');
		}
	});
});

function prependAndSubmit() {
	var repNumElement = document.getElementById('rep_num');
	var companyCode = document.getElementById('companyCode');
	var usernameElement = document.getElementById('j_username');
	var passwordElement = document.getElementById('j_password');
	if (passwordElement.value == null || passwordElement.value == "") {
		document.getElementById('errLogin').value = "Password Required!";
		return false;
	}
	/* if element does not start with company code... */
	
	if( repNumElement.value != null && repNumElement.value.substr(0,1) == '0'  ) {
		while(repNumElement.value.substr(0,1) == '0') {
			repNumElement.value = repNumElement.value.substr(1);
		}
	}

	usernameElement.value = companyCode.value + '-' + repNumElement.value;

	return true;
}