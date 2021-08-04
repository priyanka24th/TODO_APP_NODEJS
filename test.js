
var Mammal = function(name){
    this.name = name

}
var Test = function(age){
    this.age = age

}
Mammal.prototype.print = function(){
    return "Hello "+ this.name

}
Mammal.prototype.count = function(){
    return "Hello "+ this.name.length

}
Test.prototype = new Mammal('Priyanka')
Test.prototype.nameCount = function(){
    return "Hello "+ this.name+" your name is "+ this.name.length+" character long"

}
var obj = new Test(24)
console.log(obj.count())
