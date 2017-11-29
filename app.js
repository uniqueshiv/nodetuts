// function callFunction(fun){
//   fun();
// }
//
// //function expression
// var saybye=function(){
//   console.log('bye');
// };
// //saybye();
// callFunction(saybye);
// var sum=require('./stuff');
// var counter=require('./count');
// console.log(counter(['amit','syanm','john','smith','rajeev']))
// console.log(sum.adder(34,4));
// console.log(sum.pi);

// var events=require('events');
// var myemitter=new events.EventEmitter();
// myemitter.on('someEvent',function(mssg){
//   console.log(mssg);
// })
// myemitter.emit('someEvent1','The event was emitted');

var events=require('events');
var util=require('util');

var Person=function(name){
  this.name=name;
}

util.inherits(Person,events.EventEmitter);
var james=new Person('james');
var mary=new Person('mary');
var ryu=new Person('ryu');
var people=[james,mary,ryu];
people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name+' said '+mssg);
  })
})
james.emit('speak','hi dudes');
