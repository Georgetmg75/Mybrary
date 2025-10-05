const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
// ...existing code...

// Removed pre('remove') hook. Logic now handled in route.
})

module.exports = mongoose.model('Author', authorSchema)