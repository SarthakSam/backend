module.exports = function(sequelize, Sequelize) {

    var Message = sequelize.define('message', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        bookname: {
                    type: Sequelize.STRING,
                      notEmpty: true
                },

        sendername: {
                    type: Sequelize.STRING,
                    notEmpty: true
                },
        recieverid: {
                    type: Sequelize.INTEGER,
                    notEmpty: true
                  },
        textcontent: { type: Sequelize.STRING,
                        notEmpty: true
          }

    });

    return Message;

}
