const express=require('express')
const { getData } = require('../controller/signup')
const { playvideo } = require('../controller/videos')
const router=express.Router()

router
    .route('/')
    .get(getData)
router
    .route('/play/:url')
    .get(playvideo)

module.exports=router