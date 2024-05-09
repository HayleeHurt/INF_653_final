const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const stateSchema = new Schema({
    stateCode: {
        type: String, 
        required: true
    
    }, 
    funfacts: {
        type: [], 
        required: true
        
    }
});

module.exports = mongoose.model('State', stateSchema); 