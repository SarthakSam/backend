// var Express = require('express');
// const route = Express.Router();
// const fs = require('fs');
//  var multer = require('multer');
//  var bodyParser = require('body-parser');
//  var app = Express();
//  app.use(bodyParser.json());
//
//
//  let Storage = multer.diskStorage({
//       destination: function(req, file, callback) {
//           callback(null, path.resolve(__dirname, './uploads'));
//       },
//       filename: function(req, file, callback) {
//           callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//       }
//   });
//
//   let upload = multer({
//        storage: Storage
//    }).array("imgUploader", 3); //Field name and max count
//
//
//     route.post("/", function(req, res) {
//       console.log("post request to upload",req.files)
//         upload(req, res, function(err) {
//           console.log(req.files);
//             if (err) {
//                 return res.end("Something went wrong!");
//             }
//             return res.end("File uploaded sucessfully!.");
//         });
//     });
//
// module.exports ={ route}



// const Product = require('../../db').Product
 const route = require('express').Router();
 const path = require('path');
 const multer = require('multer');
 const fs = require('fs');
 const DIR = '/home/sarthak/finalProject/authentication/uploads';
 const bodyParser = require('body-parser')

 // const express = require('express');
 // const app = express();
 // const router = express.Router();

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

route.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
res.setHeader('Access-Control-Allow-Methods', 'POST');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});



route.post('/',upload.single('photo'), function (req, res) {
  // console.log(req.body);
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });

    } else {
      console.log('file received');
      console.log(req.file);
      return res.send({
        success: true,
        // name: file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      })
    }
});

module.exports = { route}
