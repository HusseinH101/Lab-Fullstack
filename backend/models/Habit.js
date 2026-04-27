import mongoose from 'mongoose'

const habitSchema = new mongoose.Schema({

  name: { type: String, required: true },

  category: { type: String, required: true },

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  difficulty: { type: String, required: true },

  xpReward: { type: Number, default: 10 },

  isWeeklyBoss: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now }

})

const Habit = mongoose.model('Habit', habitSchema)

export default Habit