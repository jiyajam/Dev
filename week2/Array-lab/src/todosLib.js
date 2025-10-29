// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }
let todosArray = []
let nextId = 1

function addOne(task, completed, dueDate) {
  if (!task || !completed || !dueDate) return false

  const newTask = {
    id: nextId++,
    task,
    completed,
    dueDate,
  }

  todosArray.push(newTask)
  return newTask
}
function getAll() {
  return todosArray
}

function findById(id) {
  const numericId = Number(id)
  const todotask = todosArray.find((item) => item.id === numericId)
  return todotask || false
}
function updateOneById(id, updatedData) {
  const todotask = findById(id)
  if (todotask) {
    if (updatedData.task) todotask.task = updatedData.task
    if (updatedData.completed) todotask.completed = updatedData.completed
    if (updatedData.dueDate) todotask.dueDate = updatedData.dueDate
    return todotask
  }
  return false
}

function deleteOneById(id) {
  const todotask = findById(id)
  if (todotask) {
    const initialLength = todosArray.length
    todosArray = todosArray.filter((todotask) => todotask.id !== Number(id))
    return todosArray.length < initialLength
  }
  return false
}

if (require.main === module) {
  let result = addOne('to do laundry', true, '05-10-2025')
  console.log(result)
  result = addOne('to clean the room', false, '06-10-2025')
  console.log(result)

  console.log('getAll called: ', getAll())

  console.log('findById called: ', findById(1))

  console.log(
    'updateOneById called: ',
    updateOneById(1, { completed: false, dueDate: '08-10-2025' })
  )
  console.log('findById called after item updated: ', findById(1))

  console.log('deleteOneById called: ', deleteOneById(1))
  console.log('findById called after item is deleted: ', findById(1))
}
