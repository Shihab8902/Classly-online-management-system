const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: ["admin", "teacher", "student", "staff"]
    },

    //Shared fields
    name: {
        first: { type: String, required: true },
        last: { type: String },
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: String,
    gender: {
        type: String, enum: ["Male", "Female", "Other"]
    },
    dateOfBirth: Date,
    profileImage: {
        type: String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    //Student Specific
    student: {
        admissionNumber: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        section: {
            type: String,
            required: true
        },
        rollNumber: {
            type: String,
            required: true
        },
        session: {
            type: String,
            required: true
        },
        guardian: {
            name: { type: String, required: true },
            phone: { type: String, required: true },
        },
        expectedPassingYear: {
            type: Date,
            required: true
        }
    },

    //Teacher Specific
    teacher: {
        employeeId: { type: String, required: true },
        department: { type: String, required: true },
        qualification: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        joiningDate: { type: Date, required: true }
    },

    //Staff Specific
    staff: {
        employeeId: { type: String, required: true },
        department: { type: String, required: true },
        designation: { type: String, required: true },
        joiningDate: { type: String, required: true }
    },

    //Admin-Specific permissions
    adminPermissions: [String],


    //Common Metadata
    isActive: { type: Boolean, default: true },
    lastLogin: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

}, { timestamps: true });


const userCollection = mongoose.model("Users", userSchema);

module.exports = userCollection;