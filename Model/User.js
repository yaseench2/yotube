const mongoose=require('mongoose')

const YoutubeSchema=new mongoose.Schema({
    id:String,
    username:String,
    password:String,   
})

module.exports=mongoose.model('User',YoutubeSchema)