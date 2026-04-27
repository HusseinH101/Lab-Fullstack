import Habit from "../models/Habit.js";


export const createHabit = async(req, res) =>{
    try{
        const habit = new Habit(req.body)
        const saved = await habit.save()
        res.status(201).json(saved)
    }catch(err){
        res.status(400).json({error: err.message})
    }

}

export const getHabits = async(req, res) =>{
    try{
        const habits = await Habit.find({ userId: req.params.userId})
        res.status(200).json(habits)
    } catch(err){
        res.status(500).json({ error: err.message})

    }
}

export const updateHabit = async (req, res) =>{
    try{
        const habit = await Habit.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        if (!habit) {

            return res.status(404).json({error:"Habit not found"})
        }
        res.status(200).json(habit)
    } catch(err) {

        res.status(400).json({error: err.message})

    }
}

export const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id)
    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' })
    }
    res.status(200).json({ message: 'Habit deleted' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}