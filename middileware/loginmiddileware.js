exports.isLoggedin = async (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.redirect('/')
    }
    req.username = token.user
    next()
}
exports.ifLoggedin = async (req, res, next) => {
    const token = req.cookies.token

    if (token) {
        return res.redirect('/userhome')
    }
    next()
}
