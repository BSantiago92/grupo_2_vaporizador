module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.category == "user") {
        return res.redirect('/user/login');
    }
    next();
};