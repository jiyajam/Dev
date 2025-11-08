/* // The data model for pet is as follows
{
    "name": "Buddy",
    "species": "Dog",
    "age": 1,
    "color": "Brown",
    "weight": 2
  }
 */
let petArray = [];

let nextId = 1;

const getAll = () =>{
  return petArray;}


const addOne = (name, species, age, color, weight) => {
  // Check if any parameter is empty or undefined
  if (!name || !species || !age || !color || !weight) {
    return false;
  }

  const newPet = {
    id: nextId++,
    name,
    species,
    age,
    color,
    weight,
  };

  petArray.push(newPet);
  return newPet;
}

const findById=(id)=> {
  const pet = petArray.find((item) => item.id == id);
  if (pet) {
    return pet;
  } else {
    return false;
  }
}

const updateOneById = (id, updatedData)=> {
  const pet = findById(id);
  if (pet) {
    // Update properties only if provided in updatedData
    if (updatedData.name) {
      pet.name = updatedData.name;
    }
    if (updatedData.species) {
      pet.species = updatedData.species;
    }
    if (updatedData.age) {
      pet.age = updatedData.age;
    }
    if (updatedData.color) {
      pet.color = updatedData.color;
    }
    if (updatedData.weight) {
      pet.weight = updatedData.weight;
    }
    return pet;
  }
  return false;
}

const deleteOneById=(id)=> {
  const pet = findById(id);
  if (pet) {
    const initialLength = petArray.length;
    petArray = petArray.filter((pet) => pet.id != id);
    return petArray.length < initialLength; // Indicate successful deletion if the length has d