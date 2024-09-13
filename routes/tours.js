const express = require('express');
const Tour = require('../models/Tour');
const router = express.Router();

// Create new tour
router.post('/', async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        const savedTour = await newTour.save();
        res.status(201).json(savedTour);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all tours
router.get('/', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single tour
router.get('/:id', async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) return res.status(404).json({ error: "Tour not found" });
        res.status(200).json(tour);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a tour
router.put('/:id', async (req, res) => {
    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTour) return res.status(404).json({ error: "Tour not found" });
        res.status(200).json(updatedTour);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a tour
router.delete('/:id', async (req, res) => {
    try {
        const deletedTour = await Tour.findByIdAndDelete(req.params.id);
        if (!deletedTour) return res.status(404).json({ error: "Tour not found" });
        res.status(200).json({ message: "Tour deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
