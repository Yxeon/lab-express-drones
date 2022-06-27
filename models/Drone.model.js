const mongoose = require("mongoose");

// Iteration #1
const droneSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    propellers: {
        type: Number
    },
    maxSpeed: {
        type: Number
    }
});

const droneModel = mongoose.model("drone", droneSchema);
module.exports = droneModel;