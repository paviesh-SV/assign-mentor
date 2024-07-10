import Student from "../models/studentSchema.js"

export const createStudent = async(req, res) => {
    try {
        const students = new Student(req.body);
        await students.save()
        res.status(201).json({
            message: 'Student created successfully',
            data: students
        })
    }
    catch(error) {
        res.status(500).json({error: "Failed to create student"})
    }
}

export const getStudentAll = async(req, res) => {
    try {
        const data = await Student.find();
        res.status(200).json({data: data})
    }
    catch(error) {
        res.status(500).json({error: 'Failed to fetch data'})
    }
}

export const getStudentAssigned = async(req, res) => {
    try {
        const studentId = req.params.id;
        const {mentorId} = req.body;
        const student = await Student.findByIdAndUpdate(
            studentId,
            {mentorId: mentorId},
            {new: true}
        )
        res.status(200).json({
            message: 'Assigned mentor successfully',
            student: student
        })
    }
    catch(error) {
        res.status(500).json({error: 'Failed to assign mentor'})
        console.log(error);
    }
}

export const getStudentAssignedMentor = async(req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findById(id).populate('mentorId');
        res.status(200).json({
            message: 'Fetched successfuly',
            Mentor: student.mentorId
        })
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: 'Failed to fect mentors'})
    }
}