const route = require('express').Router();
const Wishlist = require('../../models').wishlist;
  
route.get('/',(req,res) => {
    Wishlist.findAll()
    .then((wishes) => { res.status(200).send(wishes); })
    .catch((err) => { res.status(500).send({ error: "could not retrieve wish list " }); });
});

route.get('/:id',(req,res) => {
    Wishlist.findAll()
    .then((wishes) => { res.status(200).send(wishes); })
    .catch((err) => { res.status(500).send({ error: "could not retrieve wish list " }); });
});

route.post('/',(req,res) => {
   console.log(req.body);
   if(isNaN(req.body.bookid)){
    res.status(403).send({ error: "No such book exist"})
  }
  if(isNaN(req.body.userid)){
    res.status(403).send({ error: "No such seller"})
  }    
  Wishlist.findOne({ where : {bookid: req.body.bookid, userid: req.body.userid }}).then(wish => {
      if(wish){
           res.send({ message: "Already wished"});
      }
      else{
        Wishlist.create({
            bookid: parseInt(req.body.bookid),
            userid: parseInt(req.body.userid)
        }).then((wish) => { res.status(201).send(wish); })
        .catch((error) => { res.status(501).send({ error: "Error adding book to wish list" }) })
      }
  })
  
});

module.exports = { route }
