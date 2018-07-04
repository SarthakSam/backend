const route = require('express').Router();
let Book = require('../../models').listing;


route.get('/',(req,res) => {
    console.log("get request to listings =>",Book );

    Book.findAll()
   .then((books) => { res.status(200).send(books); })
   .catch((err) => { res.status(500).send({ error: "could not retrieve books" }); });
})

// get a particular book
route.get('/:id',(req,res) => {
    // console.log(req.params["id"]);
    Book.findOne({ where: { id : req.params["id"] } }).then(book => {
        if(book){
            res.send(book);
        }
        else{
            res.send({message: "no book with this id"});
        }
    })
})

route.post('/',(req,res) => {
     console.log("hello",req.body)
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
                Condition: parseInt(req.body.condition)
            }).then((product) => { res.status(201).send(product); })
            .catch((error) => { res.status(501).send({ error: "Error adding product" }) })
        }
    })
})

module.exports = { route}



