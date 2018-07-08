var authController = require('../controllers/authcontroller.js');
let User = require('../models').user;


module.exports = function(app, passport) {

  app.get('/signup', authController.signup);
  app.get('/signin',authController.signin );
  app.get('/dashboard',isLoggedIn, authController.dashboard);
  app.get('/logout',authController.logout);
  app.get('/getUser',(req,res) => {
    // console.log("getUser",req._passport.session);
    // console.log("user",req.user);
    if(req.user){
    let user ={
      statusCode: 200,
      id: req.user.id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      username: req.user.username,
      about: req.user.about,
      college: req.user.college,
      address: req.user.address,
      mobileNo: req.user.mobileNo,
      email: req.user.email
    }
    res.send(user);
    }
    else{
      res.send({statusCode: 400});
    }
  })

    app.get('/getUser/:id',(req,res) => {
      console.log("sending user with id:",req.params["id"])
          User.findOne({ where: { id : req.params["id"] } }).then(user => {
                if(user){
                    res.send(user);
                }
                else{
                    res.send({message: "no user with this id"});
                }
            })
    })
  // app.post('/signup', function(req, res, next) {
  //   passport.authenticate('local-signup', function(err, user, info) {
  //     if (err) {
  //       return next(err); // will generate a 500 error
  //     }
  //     // Generate a JSON response reflecting signup
  //     if (! user) {
  //       if(info)
  //       return res.send({ success : false, message : 'signupfailed' ,info: info});
  //       return res.send({ success : false, message : 'signupfailed' });
  //     }
  //     req.logIn(user, function(err) {
  //       if (err) { return next(err); }
  //       return res.send({ success : true,user: {username: user.username}, message : 'signup succeeded' })
  //     });
  //   })(req, res, next);
  // });
  //



  // app.post('/signin',  passport.authenticate('local-signin'),function(req, res) {
  //   // If this function gets called, authentication was successful.
  //   // `req.user` contains the authenticated user.
  //   console.log(req);
  //
  //   res.send(req.user.username);
  // })

//   app.post('/signin', function(req, res, next) {
//     console.log(req.body)
//   passport.authenticate('local-signin', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.send({ success : false, message : 'signinfailed' ,info: info}); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.send({ success : true,user: {username: user.username}, message : 'signup succeeded' })
//     });
//   })(req, res, next);
// });
//

app.post('/profile',(req,res) => {
  console.log("profile");
  console.log(req.body);
  User.findOne({ where: { id : req.body.id } }).then(user => {
        if(user){
          let newusername = req.body.username;
          let newemail = req.body.email;
          let newfirstname = req.body.firstname;
          let newlastname = req.body.lastname;
          let newabout = req.body.about;
          let newmobileNo = req.body.mobileNo;
          let newcollege = req.body.college;
          let newaddress = req.body.address;
          user.updateAttributes({
            username: newusername,
            email: newemail,
            firstname: newfirstname,
            lastname: newlastname,
            about: newabout,
            mobileNo: newmobileNo,
            college: newcollege,
            address: newaddress
          });
          res.redirect('/');
        }
        else{
            res.redirect('/ ');
        }
    })
});

  app.post('/signup', passport.authenticate('local-signup', {
          successRedirect: '/',
          failureRedirect: '/signup'
      }
  ));

      app.post('/signin', passport.authenticate('local-signin', {
          successRedirect: '/',
          failureRedirect: '/signin'
      }
  ));


  function isLoggedIn(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated())
    return next();
    res.redirect('/signin');
  }

}
// app.post('/signin', function(req, res, next) {
//   passport.authenticate('local-signin', function(err, user, info) {
//     req.login()
//     console.log(req.user);
//     if (err) {
//       return next(err); // will generate a 500 error
//     }
//     // Generate a JSON response reflecting signup
//     if (! user) {
//       return res.send({ success : false, message : 'signinfailed' ,info: info});
//     }
//     // console.log(req.sessionID);
//     // console.log(req._passport.session);
//
//     return res.send({ success : true,user: {username: user.username}, message : 'signup succeeded' });
//   })(req, res, next);
// });
