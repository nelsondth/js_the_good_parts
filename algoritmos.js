const fruits = ['pera', 'manzana', 'piña']
console.log(this, 'this de afuera')

// Iteracion con for
for (let index = 0; index < fruits.length; index++) {
  // los bloques no alteran el contexto de this
  // console.log(this, 'this de adentro')
  // console.log(index)
  // element = array[index];
  // console.log(element)
}
//index esta declarado comouna variable let asi que vive solo dentro del bloque
//console.log(index)

// Iteracion idiomatica pasando una funcion normal
fruits.forEach(function (fruit, index) {
  console.log(index);
  // this aca cambio su contexto
  console.log(this)
  console.log(fruit)
});

// Iteracion idiomatica pasando una arrow function
fruits.forEach((fruit, index) => {
  console.log(index);
  // this aca mantiene el contexto global
  console.log(this)
  console.log(fruit)
});

// Iteracion con map
fruits2 = fruits.map((fruit, index) => {
  return `La ${fruit} ${index}`
})
console.log(fruits2)

number = 0
while (number < 3) {
  console.log(`${number} es menor a 3`)
  number++
}

// iteracion de objectos
for (let fruit in fruits) {
  console.log(fruits[fruit])
}


