$(document).ready(function() {
    init();
    validateWidgets();
});

function init () {
   $("#colour").attr("disabled", true);
}

function validateWidgets() {
    $("#widgets").keyup(function() {
	if ($("#widgets").val() > 0) {
	    $("#colour").attr("disabled", false);
	} else {
	    $("#colour").attr("disabled", true);
	}
    });
}
	    
