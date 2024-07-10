import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    batch: String,
    course: String,
    email: String,
    mentorId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentors'
    }]
})

const Student = mongoose.model('Student', studentSchema);
export default Student