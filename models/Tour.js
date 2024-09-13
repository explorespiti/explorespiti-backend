const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [String],
    price: { regular: { type: Number, required: true }, discounted: { type: Number } },
    duration: { type: String, required: true },
    highlights: [String],
    itinerary: [
        {
            day: { type: Number, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            activities: [String],
        },
    ],
    inclusions: [String],
    exclusions: [String],
    accommodation: [
        {
            place: { type: String, required: true },
            type: { type: String, required: true },
        },
    ],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    availability: { type: Boolean, required: true },
    groupSize: { type: Number, required: true },
    difficultyLevel: { type: String, enum: ['Easy', 'Moderate', 'Challenging', 'Difficult'], required: true },
    reviews: [
        {
            user: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
    faqs: [
        {
            question: { type: String, required: true },
            answer: { type: String, required: true },
        },
    ],
    cancellationPolicy: { type: String, required: true },
    termsConditions: { type: String, required: true },
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
