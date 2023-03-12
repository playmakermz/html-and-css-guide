function Person(name, age) {
  var myName = 'budi'; // private property

  this.getAge = function() {
    return age; // public method
  };

  this.getName = function() {
    return myName; // private method
  };
}


console.log(myName)
