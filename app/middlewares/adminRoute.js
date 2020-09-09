module.exports = (req, res, next) => {
    if (req.session.user && user.category == "user") {
        return res.redirect('/user/login');
    }
    next();
};