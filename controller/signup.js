const User = require('../Model/User')
const Video = require('../Model/Video')

exports.getData = async (req, res) => {
    let data = await Video.find()

    res.render('guestpage', { data })
}

exports.signuppush = async (req, res) => {
    let { username, password } = req.body
    let id = `${Date.now()}`
    await User.create({
        id: id,
        username: username,
        password: password,
    })
    res.redirect('/')
}
exports.signup = (req, res) => {
    return res.render('signuppage')
}