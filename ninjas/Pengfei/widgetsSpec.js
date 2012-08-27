describe("widgets", function(){

    beforeEach(function(){
        var input = $('<input type="text" name="widgets" value="" id="widgets"/>');
        var select = $('<select name="colour" id="colour" size="1" disabled="disabled"/>');

        $(document.body).append(input);
        $(document.body).append(select);

        validateWidgets();
    });

    afterEach(function(){
        $("#widgets").remove();
        $("#colour").remove();
    });

	it("1 should equal 1", function(){
		expect(1).toEqual(1);
	});
	
	it("should enable when the value is 1", function(){
		$("#widgets").val(1);
		$("#widgets").trigger("keyup");
		
		var actual = $("#colour").attr("disabled");
		expect(actual).toEqual(undefined);
	});

	it("should be diabled when the value is 0", function(){
    		$("#widgets").val(0);
    		$("#widgets").trigger("keyup");

    		var actual = $("#colour").attr("disabled");
    		expect(actual).toEqual("disabled");
    });

	it("should be diabled when the value is -1", function(){
    		$("#widgets").val(-1);
    		$("#widgets").trigger("keyup");

    		var actual = $("#colour").attr("disabled");
    		expect(actual).toEqual("disabled");
    });
})