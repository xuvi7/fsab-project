const mongoose = require('mongoose')

const Journal = new mongoose.Schema(
    {
        email: { type: String, required: true },
        content: { type: String, required: true },
    },
    { collection: 'journal-data' }
)

const model = mongoose.model('JournalData', Journal)

module.exports = model