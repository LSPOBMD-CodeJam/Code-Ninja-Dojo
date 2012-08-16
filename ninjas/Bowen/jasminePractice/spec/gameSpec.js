describe("Gamer", function() {
var gamer;
beforeEach(function(){
gamer = new Gamer();
});

it("should return fizzbuzz when input 15", function() {
var result = gamer.check(15);
expect(result).toEqual("fizzbuzz");
});

it("should return fizz when input 3", function(){
expect(gamer.check(3)).toEqual("fizz");
});

it("should return buzz when input 5", function(){
expect(gamer.check(5)).toEqual("buzz");
});

it("should return 4 when input 4", function(){
expect(gamer.check(4)).toEqual(4);
});
});
