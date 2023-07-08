// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');



const Recipe = database.define(
	'Recipe',
	{
		name: {
			type: DataTypes.STRING(255),
			unique: true,
			allowNull: false
		},		
		makingDescription:{
			type: DataTypes.TEXT,
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		preparationTime: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		totalLikes: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		categoryId:{
			type: DataTypes.INTEGER,
			allowNull: false
		}
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

Recipe.associate = (models) => {

	// console.log('models',models)
	models.Recipe.belongsTo(models.Category, {
		foreignKey: "id",
		as: 'category'
	});
}

Recipe.findById = function(id) {
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
Recipe.prototype.toJSON = function() {
	const values = { ...this.get() };
	return values;
}
// Instance methods\

module.exports = Recipe;
