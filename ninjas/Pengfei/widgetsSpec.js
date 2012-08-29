describe("widgets", function() {

	beforeEach(function() {
		var input = $('<input type="text" name="widgets" value="" id="widgets" />');
		var select = $('<select name="colour" id="colour" size="1" />');

		$(document.body).append(input);
		$(document.body).append(select);

		validateWidgets();
	});

	afterEach(function() {
		$("#widgets").remove();
		$("#colour").remove();
	});

	it("init should disable colour element", function() {
		var beforeInit = $("#colour").attr("disabled");
		expect(beforeInit).toEqual(undefined);

		init();

		var afterInit = $("#colour").attr("disabled");
		expect(afterInit).toEqual("disabled");
	});

	it("colour should enable when the value is 1", function() {
		$("#widgets").val(1);
		$("#widgets").trigger("keyup");

		var actual = $("#colour").attr("disabled");
		expect(actual).toEqual(undefined);
	});

	it("colour should be diabled when the value is 0", function() {
		$("#widgets").val(0);
		$("#widgets").trigger("keyup");

		var actual = $("#colour").attr("disabled");
		expect(actual).toEqual("disabled");
	});

	it("colour should be diabled when the value is -1", function() {
		$("#widgets").val(-1);
		$("#widgets").trigger("keyup");

		var actual = $("#colour").attr("disabled");
		expect(actual).toEqual("disabled");
	});
});

describe("widgets", function(){

	beforeEach(function() {
		var input = $('<input type="text" name="widgets" value="" id="widgets" />');
		var select = $('<select name="colour" id="colour" size="1" />');
		var okButton = $('<input type="submit" value="OK" id="OKButton" />');
		var container = $('<div id="errorMessagesContainer"></div>');

		$(document.body).append(input);
		$(document.body).append(select);
		$(document.body).append(okButton);
		$(document.body).append(container);	

		validateWidgets();
		hookUpButtonClickEvent();
	});

	afterEach(function() {
		$("#widgets").remove();
		$("#colour").remove();	
		$("#OKButton").remove();
		$("#errorMessagesContainer").remove();	
	});

	it("should show both error messages when clicking ok button without entering anything.", function(){
		$("#widgets").val("");
		$("#OKButton").trigger("click");

		var container = $("#errorMessagesContainer");

		expect(container.children().length).toEqual(2);

		var firstErrorMessage = container.children()[0];
		var secondErrorMessage = container.children()[1];

		expect(firstErrorMessage.textContent).toEqual("Please enter the number of widgets");
		expect(secondErrorMessage.textContent).toEqual("Please select a colour");
	});

	it("should show error message when clicking ok button without selecting a colour.", function(){
		$("#widgets").val("5");
		$("#OKButton").trigger("click");

		var container = $("#errorMessagesContainer");

		expect(container.children().length).toEqual(1);

		var firstErrorMessage = container.children()[0];

		expect(firstErrorMessage.textContent).toEqual("Please select a colour");
	});
});
