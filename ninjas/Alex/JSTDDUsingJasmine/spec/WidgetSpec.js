describe('test actions according to value of number of widgets', function () {
    beforeEach(function(){
        $(document).ready(function(){
            var widgets = $('<input type="text" name="widgets" value="" id="widgets">');
            var colour = $(             
                '<select name="colour" id="colour" size="1">' + 
                    '<option value="">Please select a colour</option>' + 
                    '<option value="option1">White</option>' + 
                    '<option value="option2">Orange</option>' + 
                    '<option value="option3">Blue</option>' + 
                 '</select>')
            $(document.body).append(widgets);
            $(document.body).append(colour)
        });
        //The code should allow you to only select the colour of a
        //widget if the value of the number of widgets is greater than 0.
    });
    
    afterEach(function() {
       $("#widgets").remove();
       $("#colour").remove(); 
    });
    
    it("color attr shoud be be undefined before init method get called", function(){
        expect($("#colour").attr("disabled")).toEqual(undefined);
    });
    
    it("color attr should be disabled after init method get called", function(){
        init();
        expect($("#colour").attr("disabled")).toEqual("disabled");
    });
    
    it("color attr should be false when number of widgets is more than 0", function() {
        $("#widgets").val("1");
        validateWidgets();
        $("#widgets").trigger('keyup');
        expect($("#colour").attr("disabled")).toEqual(undefined);
    })
    
    it("color attr should be true when number of widgets is less than 0", function() {
        $("#widgets").val("-1");
        validateWidgets();
        $("#widgets").trigger('keyup');
        expect($("#colour").attr("disabled")).toEqual("disabled");
    });
    
    it("color attr should be true when number of widgets is 0", function() {
        $("#widgets").val("0");
        validateWidgets();
        $("#widgets").trigger('keyup');
        expect($("#colour").attr("disabled")).toEqual("disabled");
    });
    
   describe("add error message", function() {
       beforeEach(function() {
           var submitButton = $('<input type="submit" id="submitButton" value="submit" />');
           $(document.body).append(submitButton);
       });
       
       afterEach(function() {
           $("#submitButton").remove();    
       });
       
       it("should append enter a number error message when neither enter a value nor select a colour", function() {
           clickToVerify();
           $("#submitButton").trigger('click');
           expect($("#noValue")[0].innerHTML).toEqual("please enter the number of widgets");
       }); 
       
       it("should append select a colour error message when only not select a colour", function() {
           $("#widgets").val("1");
           clickToVerify();
           $("#submitButton").trigger('click');
           expect($("#noSelectOfColour")[0].innerHTML).toEqual("please select a colour");
       }); 
  });
});

//Currently no error message appears if the user clicks the 'OK' button without selecting a
//colour or entering a value. The message we would like to see is "Please
//enter the number of widgets" and "Please select a colour".


