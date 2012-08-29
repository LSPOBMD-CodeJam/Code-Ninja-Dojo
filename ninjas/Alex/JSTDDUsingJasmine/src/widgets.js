$(document).ready(function() {
    init();
    validateWidgets();
    clickToVerify();
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

function clickToVerify() {
    $("#submitButton").click(function() {
        var v = $("#widgets");
        if (v.val() == "") {
            $(document.body).append('<p id="noValue">please enter the number of widgets</p>');
        } 
        if ($("#colour option:selected").length == 0) {
            $(document.body).append('<p id="noSelectOfColour">please select a colour</p>')
        }
    });
}
	    
