import mongoose from 'mongoose'

const checkinSchema = new mongoose.Schema({

  habitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Habit', required: true },

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  completedAt: { type: Date, default: Date.now },

  note: { type: String }

})

const Checkin = mongoose.model('Checkin', checkinSchema)

export default Checkin