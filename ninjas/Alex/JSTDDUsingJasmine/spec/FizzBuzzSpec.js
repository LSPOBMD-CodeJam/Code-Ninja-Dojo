describe('fizzBuzz test', function () {
     var fizzBuzz;
     beforeEach(function() {
         fizzBuzz = new FizzBuzz();
     });

     it("fizzBuzz.shout has been called", function() {
       spyOn(fizzBuzz, 'inputValue');
       fizzBuzz.inputValue();
       expect(fizzBuzz.inputValue).toHaveBeenCalled();
     });

     it("will show the actual input value if the input value is 1 or 2", function() {
       spyOn(fizzBuzz, 'inputValue').andReturn(1);
       fizzBuzz.shout();
       expect(fizzBuzz.inputValue()).toEqual(1);
       expect(fizzBuzz.outputValue).toEqual(1);
     });

     it("will show buzz if input value is multiply of 5", function() {
       spyOn(fizzBuzz, 'inputValue').andReturn(5);
       fizzBuzz.shout();
       expect(fizzBuzz.inputValue()).toEqual(5);
       expect(fizzBuzz.outputValue).toEqual("buzz");
     });

     it("will show fizz if input value is multiply of 3", function() {
       spyOn(fizzBuzz, 'inputValue').andReturn(9);
       fizzBuzz.shout();
       expect(fizzBuzz.inputValue()).toEqual(9);
       expect(fizzBuzz.outputValue).toEqual("fizz");
     });

     it("will show fizzbuzz if input value is multiply of both 3 and 5", function() {
       spyOn(fizzBuzz, 'inputValue').andReturn(15);
       fizzBuzz.shout();
       expect(fizzBuzz.inputValue()).toEqual(15);
       expect(fizzBuzz.outputValue).toEqual("fizzbuzz");
     });

});