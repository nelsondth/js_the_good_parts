// Funcion auto invocada
(function(){
  console.log('autoinvoke')
})();

// Funcion auto invocada con parametros
(function(param){
  console.log(param)
})('autoinvoke from params');

// Funcion anonima
var test = function (outerContext) {
  console.log('funcion anonima')
}

// Invocacion de la funcion anonima
test(that)

// Named function
function namedFunction(param) {
  // llamando a una variable definida en el scope global
  test()
  var _myVariable = param
  console.log(_myVariable)
}

// console.log(_myVariable) undefined, ya que _myVariable es local a la funcion

// llamando a la funcion
namedFunction('named function')

// Declaracion de objetos forma "new"
obj1 = new Object()

// Declaracion de objetos forma "literal"
obj2 = {}

console.log(obj1)
console.log(obj2)


// Los objetos (json) son representaciones literales de las cosas
var nelson = {
  name: 'nelson',
  age: 23,
  head: 1,
  arms: 2,
  //esto es un metodo del objeto nelson
  sayName: function (){
    console.log(this.name)
  },
  whatIsThis: function (){
    console.log(this)
  },
  legs: 2,
};

// Llamado al metodo de sayName de nelson 
nelson.sayName()


// Demostracion de hoisting
console.log(test2)
var test2 = 'test2'
console.log(test2)

// contexto global
console.log(this)

// contexto del objeto nelson.
nelson.whatIsThis()

// Scope es el ambiente en el cual viven las variables

// Hoisting es el comportamiento de js que hace que las
// declaraciones de variables se vayan al tope del scope,
// mas no sus asignaciones

// this es una funcion que retorna el contexto (objeto) desde donde se esta ejecutando

// context es el objeto desde el cual "this" es ejecutado. 
