module.exports = function(sequelize, Sequelize) {
 
    const Listing = sequelize.define('listing',{
        id: {    type: Sequelize.INTEGER,
                 autoIncrement: true,
                 primaryKey: true   
            },
        seller: {  type: Sequelize.INTEGER,
                   allowNull: false
              },
        bookname: { type: Sequelize.STRING,
                    allowNull: false
             },
        authorname:{ type: Sequelize.STRING,
                     allowNull: false
             },
        imageofitem:{ type: Sequelize.STRING,
                        allowNull: false,
                        defaultValue: "./uploads/no-image.jpg"
             },
         price: {        type: Sequelize.INTEGER,
                         allowNull: false
             },
         quantity: {   type: Sequelize.INTEGER,
                       allowNull: false,
                       defaultValue: 1
         },    
         Condition:{  type:   Sequelize.ENUM,
                        values: ['New', 'Almost New', 'Slight Damage', 'Worn'],
                        allowNull: false
             }           
    
    })
    return Listing;
 
}
