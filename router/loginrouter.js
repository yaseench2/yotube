const express=require('express')

const { loginpost, userhome, logout } = require('../controller/login')
const { uploadvideo, playvideo, userplayvideo } = require('../controller/videos')
const { isLoggedin, ifLoggedin } = require('../middileware/loginmiddileware')
const router=express.Router()

router
    .route('/')
    .get((req,res)=>{
        res.render('loginpage')
    })
    .post(loginpost)
router
    .route('/userhome')
    .get(userhome)
router
    .route('/play/:url')
    .get(playvideo)
router
    .route('/uservideoplay/:url')
    .get(userplayvideo)


router
    .route('/upload')
    .post(uploadvideo)
router
    .route('/logout')
    .get(logout)    

module.exports=router