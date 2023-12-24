import mongoose from "mongoose";

const cabinSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, unique: true },
    maxCount: { type: Number, required: true, trim: true },
    rentPerNight: { type: Number, required: true, trim: true },
    image: [{
        url: { type: String, required: true, trim: true }
    }],
    currentBookings: [{
        startDate: { type: Date, required: true, trim: true },
        endDate: { type: Date, required: true, trim: true }
    }],
    cabinType: { type: String, required: true, trim: true },
    cabinDescription: { type: String, trim: true }
}, {
    timestamps: true
});

const Cabin = mongoose.model('Cabin', cabinSchema);

export default Cabin;