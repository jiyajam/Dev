const person1 = { name1: 'Ally', age1: 24, profession: 'Intern', city: 'Miami' }
const { name1, age1, profession } = person1
console.log('Name: ', name1)
console.log('Age: ', age1)
console.log('Profession: ', profession)

//nested
const person2 = { name: 'Austin', info: { age: 30, occupation: 'Engineer' } }

const {
  name,
  info: { age, occupation },
} = person2

console.log('Name:', name)
console.log('Age:', age)
console.log('Occupation:', occupation)

// Extracting Function Parameters from an Object

function greetUser({ name3, age3 }) {
  console.log(`Hello, ${name3}! You're ${age3} years old.`)
}

greetUser({ name3: 'Bob', age3: 25 })
