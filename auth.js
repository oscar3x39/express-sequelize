export default {
    isAuthorized (req, res, next) {
        const username = req.session.username ? req.session.username : "";
        if (username) {
            return next()
        } else {
            const err = new Error('authorized error');
            err.result = false;
            res.send(err)
        }
    }
};
