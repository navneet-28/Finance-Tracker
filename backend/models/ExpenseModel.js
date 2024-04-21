const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    amount:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        maxLength: 200,
        trim: true
    },
    
}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);
