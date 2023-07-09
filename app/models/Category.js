// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');



const Category = database.define(
	'Category',
	{
		name: {
			type: DataTypes.STRING(255),
			unique: true,
			allowNull: false
		},		
		image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},		
	},
	{
		// Enable automatic 'createdAt' and 'updatedAt' fields.
		timestamps: true,
		// Only allow 'soft delete'
		// (set of 'deletedAt' field, insted of the real deletion).
		paranoid: true
	}
);

// Hooks:

// Hooks\

// Static methods:

Category.associate = (models) => {
	console.log('models',models)
	models.Category.hasMany(models.Recipe, {
		foreignKey: "categoryId",
		as: 'recipe'
	});
}

Category.findById = function(id) {
	return this.findByPk(id);
}



// Recipe.findOneByEmail = function(email) {
// 	const query = {
// 		where: {
// 			email
// 		}
// 	};
// 	return this.findOne(query);
// }
// Static methods\

// Instance methods:
Category.prototype.toJSON = function() {
	const values = { ...this.get() };
	return values;
}
// Instance methods\

module.exports = Category; 
