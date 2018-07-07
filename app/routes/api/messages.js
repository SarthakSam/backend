const route = require('express').Router();
let Message = require('../../models').message;


route.get('/',(req,res) => {
    console.log("get request to listings =>",Message );

    Message.findAll()
   .then((messages) => { res.status(200).send(messages); })
   .catch((err) => { res.status(500).send({ error: "could not retrieve books" }); });
})

// get messages for particular user
route.get('/:userid',(req,res) => {
    // console.log(req.params["userid"]);
    Message.findAll({ where: { recieverid : req.params["userid"] } }).then(messages => {
        if(messages){
            res.send(messages);
        }
        else{
            res.send({message: " INBOX empty "  });
        }
    })
})

route.post('/',(req,res) => {
     console.log("hello",req.body)
      if(isNaN(req.body.recieverid)){
        res.status(403).send({ error: "No such reciever"})
      }

            Message.create({
                sendername: req.body.sendername,
                bookname: req.body.bookname,
                recieverid: parseInt(req.body.recieverid),
                textcontent: req.body.textcontent
            }).then((message) => { res.status(201).send(message); })
            .catch((error) => { res.status(501).send({ error: "Error adding product" }) })
})

module.exports = { route };
