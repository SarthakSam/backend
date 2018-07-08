const route = require('express').Router();
let Book = require('../../models').listing;

const multer = require('multer');
const Sequelize = require('sequelize');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, './uploads/');
  },
  filename: function(req,file,cb){
    cb(null,  new Date().toISOString() + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
   fileFilter : fileFilter
});
// const fileFilter = (req, file, cb) => {
//     //reject a file
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };
//
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter : fileFilter
//
// });
//
// const Op = Sequelize.Op;




route.get('/',(req,res) => {
    console.log("get request to listings =>",Book );

    Book.findAll()
   .then((books) => { res.status(200).send(books); })
   .catch((err) => { res.status(500).send({ error: "could not retrieve books" }); });
})

// get a particular book
route.get('/:id',(req,res) => {
    console.log(req.params["id"]);
    Book.findOne({ where: { id : req.params["id"] } }).then(book => {
        if(book){
            res.send(book);
        }
        else{
            res.send({message: "no book with this id"});
        }
    })
})

route.get('/filter/:id',(req,res)=>{
  console.log(req.params["id"]);
  if(req.params["id"]==1){
    Book.findAll({ order: [['price', 'ASC' ]] })
   .then((books) => { res.status(200).send(books); })
   .catch((err) => { res.status(500).send({ error: "could not retrieve books" }); });
  }
  else if(req.params["id"]==2){
    Book.findAll({ order: [['Condition', 'ASC' ]] })
   .then((books) => { res.status(200).send(books); })
   .catch((err) => { res.status(500).send({ error: "could not retrieve books" }); });
  }
  else{
    res.redirect('/');
  }
})

route.get('/search/:name',(req,res)=>{
  // console.log(req.params["name"]);
  let array;
  // Book.findAll({ where: { bookname : req.params["name"] } }).then(book => {
  //     if(book){
  //         res.send(book);
  //     }                        {$iLike: req.params["name"]}
  // });    { bookname: { $eq : req.params["name"] } }, authorname: { $eq : req.params["name"] }
  Book.findAll({ where: { $or: [ { bookname: req.params["name"] }, { authorname: req.params["name"] } ]  } }).then(book => {
      if(book){
          res.send(book);
      }
      else{
          res.send({message: "no book with this id"});
      }
  })

})


route.post('/', upload.single('bookimage'), (req, res) => {
        // console.log(req.body);
        // console.log("book")
        // console.log(req.file)
        let filepath;
        if(req.file==undefined){
          filepath='./uploads/no-image.jpg';
        }
        else{
          filepath=req.file.path;
        }
        if(isNaN(req.body.price)){
            res.status(403).send({ error: "Price not valid"})
          }
          if(isNaN(req.body.seller)){
            res.status(403).send({ error: "No such seller"})
          }
          Book.findOne({ where: {seller: parseInt(req.body.seller),bookname: req.body.bookname, authorname: req.body.authorname, price: parseFloat(req.body.price),Condition:  parseInt(req.body.condition) } }).then(book => {
            if(book){
                console.log("item already present");
                let newquan = book.quantity+1;
                book.updateAttributes({quantity: newquan });
                res.send({message: "Quantity increased by 1"});
            }
            else{
                Book.create({
                    seller: parseInt(req.body.seller),
                    bookname: req.body.bookname,
                    authorname: req.body.authorname,
                    price: parseFloat(req.body.price),
                    imageofitem: filepath,
                    Condition: parseInt(req.body.condition)
                }).then((product) => { res.send({ message: "Book added for sale " }) })
                .catch((error) => { res.status(501).send({ message: "Error adding book" }) })
            }
        })

})

module.exports = { route}
