
const cookieToken = require('../cookieToken/cookieToken')
const User = require('../Model/User')
const Video = require('../Model/Video')

exports.loginpost = async (req, res) => {
    const { username, password } = req.body
    let user = await User.findOne({ username })

    if (!user) {
        return res.redirect('/')
    }
    if (!user.password == password) {
        return res.redirect('/')
    }
    cookieToken(user, res)
    res.render('loginpage')
}
exports.logout = async (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).redirect('/')
}

exports.userhome = async (req, res) => {
    let token = req.cookies.token
    let admin = token.user
    console.log(admin)
    let video = await Video.find({ admin: admin })
    res.render('userhome', { video, admin })
}
