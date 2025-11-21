const model = require('../services/gemini')

// POST /api/generate-text2
const generateText2 = async (req, res) => {
  // Destructure dynamic data from request body
  const { age, gender, healthGoal, dietPreference, workoutDays } = req.body

  // Validate all required fields
  if (!age || !gender || !healthGoal || !dietPreference || !workoutDays) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  // Construct a dynamic prompt
  const prompt = `
    I am a ${age}-year-old ${gender} aiming to ${healthGoal}.
    My diet preference is ${dietPreference}, and I can work out ${workoutDays} days per week.
    Please provide a personalized weekly health and fitness plan, including exercise types, duration, and meal suggestions.
  `

  try {
    // Call Gemini LLM
    const result = await model(prompt)

    // Return the output
    res.json({ output: result.text })
  } catch (error) {
    console.error('Gemini API error:', error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = generateText2

//post {
//   "fitnessType": "strength training",
//   "frequency": "4",
//   "experience": "beginner",
//   "goal": "build muscle and increase overall strength"
// }
