//Doubling numbers
const numbers = [2, 4, 6, 8, 10]

const doubledNumbers = numbers.map((num) => num * 2)

console.log('Original Numbers: ', numbers)
console.log('Doubled Numbers: ', doubledNumbers)

//Converting Temperatures to Kelvin
const tempCelsius = [0, 15, 30, 45]

const tempKelvin = tempCelsius.map((celsius) => celsius + 273.15)

console.log('Temperature in Celsius: ', tempCelsius)
console.log('Temperature in Kelvin: ', tempKelvin)

//Capitalizing Names

const names = ['alice', 'bob', 'carol']
const capitalizedNames = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
)

console.log('Original Names:', names)
console.log('Capitalized Names:', capitalizedNames)
