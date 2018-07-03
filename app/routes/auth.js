var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);

    app.post('/signup', function(req, res, next) {
      passport.authenticate('local-signup', function(err, user, info) {
        if (err) {
          return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting signup
        if (! user) {
          if(info)
          return res.send({ success : false, message : 'signupfailed' ,info: info});
          return res.send({ success : false, message : 'signupfailed' });
        }
        return res.send({ success : true, message : 'signup succeeded' });
      })(req, res, next);
    });

    app.post('/signin', function(req, res, next) {
      passport.authenticate('local-signin', function(err, user, info) {
        if (err) {
          return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting signup
        if (! user) {
          return res.send({ success : false, message : 'signinfailed' ,info: info});
        }
        return res.send({ success : true, message : 'signup succeeded' });
      })(req, res, next);
    });

    // app.post('/signup', passport.authenticate('local-signup', {
    //         successRedirect: '/dashboard',
    //         failureRedirect: '/signup'
    //     }
    // ));
//     app.post('/signin', passport.authenticate('local-signin', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/signin'
//     }
// ));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }

}
