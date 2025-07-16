const Dog = require('../models/Dog')

// Create a new dog
exports.createDog = async (req, res) => {
  try {
    const { name, breed, age, weight, notes, memberId } = req.body
    const dog = new Dog({ name, breed, age, weight, notes, memberId })
    await dog.save()
    res.status(201).json(dog)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create dog' })
  }
}

exports.getDogsByMember = async (req, res) => {
    try {
      const { memberId } = req.params
      const dogs = await Dog.find({ memberId })
      res.json(dogs)
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch dogs' })
    }
  }
// GET all dogs (admin only)
// exports.getAllDogs = async (req, res) => {
//   try {
//     const dogs = await Dog.find().populate('memberId', 'username')  // optional populate
//     res.json(dogs)
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' })
//   }
// }
// GET all dogs (admin only)
exports.getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find() // no populate here
    res.json(dogs)
  } catch (err) {
    console.error('Error fetching dogs:', err)
    res.status(500).json({ error: 'Server error' })
  }
}
