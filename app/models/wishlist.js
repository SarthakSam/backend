module.exports = function(sequelize, Sequelize) {
 
    var WishList = sequelize.define('wishlist', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        bookid: {
                    type: Sequelize.INTEGER,
                    notEmpty: true
                },

        userid: {
                    type: Sequelize.INTEGER,
                    notEmpty: true
                }        
       
    });
 
    return WishList;
 
}
