module.exports = function(sequelize, Sequelize) {
 
    var Message = sequelize.define('message', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        bookid: {
                    type: Sequelize.INTEGER,
                },

        senderid: {
                    type: Sequelize.INTEGER,
                    notEmpty: true
                },        
        recieverid: {
                    type: Sequelize.INTEGER,
                    notEmpty: true
                    }        
       
    });
 
    return Message;
 
}
