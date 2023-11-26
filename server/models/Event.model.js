const { Schema, model } = require("mongoose")


const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre es obligatorio.']
        },
        type: {
            type: String,
            required: [true, 'El tipo es obligatorio.']
        },
        description: {
            type: String,
            minlength: 0
        },
        location: {
            type: {
                type: String
            },
            coordinates: {
                type: [Number]
            }
        },
        ageGroup: {
            type: Number,
            enum: ['0-3', '3-6', '6-9', '2-5', '5-8', '8-11', '10-13'],
            required: [true, 'Selecciona rango de edad.']
        },
        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        messages: [{
            text: {
                type: String
            },
            sender: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        }],
    },
    {
        timestamps: true
    }
)

const Event = model("Event", eventSchema)

module.exports = Event
