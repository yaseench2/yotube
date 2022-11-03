const mongoose=require('mongoose')

const VideoSchema=new mongoose.Schema({
    url:String,
    admin:String,
})
module.exports=mongoose.model('Video',VideoSchema)