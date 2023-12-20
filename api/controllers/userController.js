const User = require('../models/userModel');
const mongoose = require('mongoose');

exports.getUserDataWithCountryDetail = async (req, res) => {
    try {
        const id = req.params.id;

        console.log('User ID:', id);

        const user = await User.findById(id).populate('country_id');
    
        console.log('Populated user:', user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};





// Create a new user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};