describe("widgets", function() {

		beforeEach(function() {
			

			$("body").append('<div id="fixture" style="display:none;"></div>');
			var fixture = $("#fixture");
			fixture.append("	<div id='container'>");
			fixture.append("	<div>");
			fixture.append("	<label for='widgets'>number of widgets:</label>");
			fixture.append("	<input type='text' name='widgets' value='' id='widgets' >");
			fixture.append("		</div>");

			fixture.append("	<div>");
			fixture.append("	<select name='colour' id='colour' size='1'>");
			fixture.append("	<option value=''>please select a colour</option> ");
			fixture.append("	<option value='option1'>white</option> ");
			fixture.append("	<option value='option2'>orange</option> ");
			fixture.append("	<option value='option3'>blue</option> ");
			fixture.append("	</select> ");		
			fixture.append("	</div>");

			fixture.append("	<div>");
			fixture.append("	<input type='submit' value='ok' />");
			fixture.append("	</div> ");
			fixture.append("	</div>  ");

		}); 

	it("should disable #colour when page init", function() {
			init(); 
			expect($("#colour").attr("disabled")).toEqual("disabled");

       });
        it("should enable #colour when the value of number of widgets is bigger than 0", function(){

		validateWidgets();
		$("#widgets").val("10");
$("#widgets").keyup();
		expect($("#colour").attr("disabled")).toEqual(undefined);
});

it("should disable #colour when the value of number of widgets is smaller than 0",function(){
		validateWidgets();
		$("#widgets").val("-10");
$("#widgets").keyup();
expect($("#colour").attr("disabled")).toEqual("disabled");
});
});
