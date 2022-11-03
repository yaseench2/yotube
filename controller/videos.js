
const User = require('../Model/User')
const Video = require('../Model/Video')


exports.uploadvideo = async (req, res) => {
    let url = req.body.link
    let token = req.cookies.token
    let admin = token.user
    let id = `${Date.now()}`
    await Video.create({
        id: id,
        url: url,
        admin: admin,

    })
    res.redirect('/userhome')
}
exports.playvideo = async (req, res) => {
    let url = req.params.url
    let video = await Video.find()
    let pvideo = video.find((x) => url == x.url)
    return res.render('videoplay', { pvideo, video })
}
exports.userplayvideo = async (req, res) => {
    let token = req.cookies.token
    let admin = token.user
    let url = req.params.url
    let video = await Video.find()
    let pvideo = video.find((x) => x.url == url)
    let uvideo = await Video.find({ admin: admin })
    return res.render('uservideoplay', { uvideo, admin, pvideo })

}
