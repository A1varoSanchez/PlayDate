const { Schema, model } = require("mongoose")


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    username: {
      type: String,
      required: [true, 'Username is required.'],
      minlength: [3, 'Username must be at least 3 characters.']
    },
    children: [{
      gender: {
        enum: [boy, girl]
      },
      birth: {
        type: Date,
      },
    }],
    family_type: {
      type: String,
    },
    photo: {
      type: String
    },
    friends: {
      type: Array
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },

  },
  {
    timestamps: true
  }
)


const User = model("User", userSchema)

module.exports = User
