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
		var selectedIndex = $("#colour")[0].selectedIndex;
		
		if(widgetsNumber == "")
		{
			showErrorMessage("Please enter the number of widgets");
		}
		
		if(selectedIndex <= 0)
		{
			showErrorMessage("Please select a colour");
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