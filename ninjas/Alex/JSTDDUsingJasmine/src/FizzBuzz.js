var fizzBuzz = new FizzBuzz();

function FizzBuzz(){
}

FizzBuzz.prototype.inputValue = function() {
    return document.getElementById("input").value;
};

FizzBuzz.prototype.outputValue = 0;

FizzBuzz.prototype.shout = function() {
    if(this.inputValue() == 1 || this.inputValue() == 2) {
      this.outputValue = this.inputValue();
    } else if(this.inputValue() % 3 == 0 && this.inputValue() % 5 == 0) {
      this.outputValue = "fizzbuzz";
      alert("kkkkkk");
    } else if(this.inputValue() % 5 == 0) {
      this.outputValue = "buzz";
    } else if(this.inputValue() % 3 == 0) {
      this.outputValue = "fizz";
    } else {
      this.outputValue = "wrong input";
    }

};