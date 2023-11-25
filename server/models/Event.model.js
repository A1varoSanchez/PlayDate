const { Schema, model } = require("mongoose")


const eventSchema = new Schema({

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

    location: {                                           // atencion
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
    }


})

const Event = model("Event", eventSchema)

module.exports = Event
