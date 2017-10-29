const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
    app.get('/', requireAuth, function (req, res) {
        res.send({ message: 'super secret code 123' });
    });
    app.post('/signin',requireSignIn, Auth.signin);
    app.post('/signup', Auth.signup);
}