import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  username: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  totalXP: { type: Number, default: 0 },

  level: { type: Number, default: 1 },

  createdAt: { type: Date, default: Date.now }

})

const User = mongoose.model('User', userSchema)

export default User