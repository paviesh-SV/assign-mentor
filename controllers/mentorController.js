import express from 'express';
import Mentor from "../models/mentorSchema.js"
import Student from "../models/studentSchema.js"

export const createMentor = async (req, res) => {
    try {
        const mentors = new Mentor(req.body);
        await mentors.save()
        res.status(201).json({
            message: "Mentors created sucesfully",
            data: mentors
        })
    }
    catch(error) {
        res.status(500).json({error: "Failed to create mentor"})
    }
}

export const getMentorAll = async(req, res) => {
    try {
        const data = await Mentor.find();
        res.status(200).json({data: data})
    }
    catch(error) {
        res.status(500).json({error: "Failed to fetch data"})
    }
}

export const getMentorAssigned = async(req, res) => {
    try {
        const mentorId = req.params.id;
        const {studentId} = req.body;
        const mentors = await Mentor.findByIdAndUpdate(
            mentorId,
            {studentId: studentId},
            {new: true}
        )
        res.status(200).json({
            message: "Students data assigned successfully",
            mentors: mentors
        })
    }
    catch(error) {
        res.status(500).json({error: "Failed to assign the students"})
        console.log(error);
    }
}

export const getStudentListMent = async(req, res) => {
    try {
        const mentorId = req.params.id;
        const students = await Student.find({mentorId: mentorId})
        res.status(200).json({
            message: "Fetched students data sucessfully",
            students
        })
    }
    catch(error) {
        res.status(500).json({error: "failed to fetch students data"})
    }
}