import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    name: String,
    course: String,
    email: String,
    studentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
})

const Mentor = mongoose.model('Mentors', mentorSchema);
export default Mentor;