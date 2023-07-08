// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');

// Custom error.
const { Err } = require('#factories/errors');


const DisabledRefreshTokens = database.define(
	'DisabledRefreshTokens',
	{
		token: {
			type: DataTypes.STRING,
			required: true,
			allowNull: false,
			unique: true
		},
		UserId: {
			type: DataTypes.INTEGER,
			required: true,
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

// Static methods:
DisabledRefreshTokens.associate = models => {
	models.DisabledRefreshTokens.belongsTo(models.User, {
		foreignKey: "UserId",
		as: 'user'
	});
}

DisabledRefreshTokens.createOrFind = function({ token, userId }) {
	const where = {
		token
	};

	const defaults = {
		token:token,
		UserId:userId
	};

	const query = {
		where,
		defaults
	};
	return this.findOrCreate(query);
}

DisabledRefreshTokens.selectAll = function({ token }) {
	const where = {
		token
	};
	const query = { where };
	return this.findAll(query);
}
// Static methods\

// Instance methods:
DisabledRefreshTokens.prototype.toJSON = function() {
	const values = Object.assign({}, this.get());
	return values;
}
// Instance methods\

module.exports = DisabledRefreshTokens;
