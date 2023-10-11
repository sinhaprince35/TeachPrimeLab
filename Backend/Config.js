const mongoose=require("mongoose")
require('dotenv').config()
const Connect = mongoose.connect(process.env.Database_url)

module.exports={
    Connect
}  