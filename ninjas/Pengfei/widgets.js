$(document).ready(function() {
	init();
	validateWidgets();
	hookUpButtonClickEvent();
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

function hookUpButtonClickEvent()
{
	$("#OKButton").click(function(){
		clearErrorMessages();
		
		var widgetsNumber = $("#widgets").val();
		if(widgetsNumber == "")
		{
			showErrorMessage("Please enter the number of widgets");
		}
	});
}

function clearErrorMessages(){
	$("#errorMessagesContainer").children().remove();
}

function showErrorMessage(message){
	var container = $("#errorMessagesContainer");
	var errorSpan = $("<span>" + message + "</span>");
	container.append(errorSpan);
}