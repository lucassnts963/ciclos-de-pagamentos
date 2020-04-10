const IP = '192.168.0.108'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(`mongodb://192.168.0.108/mymoney`)