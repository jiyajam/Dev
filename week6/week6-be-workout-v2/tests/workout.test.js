const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/userModel')
const Workout = require('../models/workoutModel')
const workouts = require('./data/workouts.js')

let token = null

beforeAll(async () => {
  await User.deleteMany({})
  const result = await api
    .post('/api/user/signup')
    .send({ email: 'mattiv@matti.fi', password: 'R3g5T7#gh' })
  token = result.body.token
})

describe('when there is initially some workouts saved', () => {
  beforeEach(async () => {
    await Workout.deleteMany({})
    await api
      .post('/api/workouts')
      .set('Authorization', 'bearer ' + token)
      .send(workouts[0])
      .send(workouts[1])
  })

  test('Workouts are returned as json', async () => {
    await api
      .get('/api/workouts')
      .set('Authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('New workout added successfully', async () => {
    const newWorkout = {
      title: 'testworkout',
      reps: 10,
      load: 100,
    }
    await api
      .post('/api/workouts')
      .set('Authorization', 'bearer ' + token)
      .send(newWorkout)
      .expect(201)
  })
})

//delete
test('Delete a workout', async () => {
  await api
    .delete(`/api/workouts/${workoutId}`)
    .set('Authorization', 'bearer ' + token)
    .expect(204)

  const allWorkouts = await workoutsInDb()
  expect(allWorkouts).toHaveLength(0)
})
//update
test('Update a workout', async () => {
  const updatedWorkout = { title: 'Updated', reps: 20, load: 60 }
  const response = await api
    .put(`/api/workouts/${workoutId}`)
    .set('Authorization', 'bearer ' + token)
    .send(updatedWorkout)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(response.body.title).toBe(updatedWorkout.title)
  expect(response.body.reps).toBe(updatedWorkout.reps)
  expect(response.body.load).toBe(updatedWorkout.load)
})

//read a single workout by id
test('Read a single workout by ID', async () => {
  const response = await api
    .get(`/api/workouts/${workoutId}`)
    .set('Authorization', 'bearer ' + token)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(response.body.id).toBe(workoutId)
  expect(response.body.title).toBe('Initial')
  expect(response.body.reps).toBe(10)
  expect(response.body.load).toBe(50)
})

afterAll(() => {
  mongoose.connection.close()
})
