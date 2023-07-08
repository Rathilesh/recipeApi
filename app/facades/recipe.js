// Reference models.
const Recipe = require('#models/Recipe');
// Custom error.
const { Err } = require('#factories/errors');

module.exports = {
	getAll: _getAll,
}

// Auth:
async function _getAll() {
	try{
		// Try to create new user.
		const recipes = await Recipe.findAll({
			include: 'category'
		});

		if(!recipes) {

			const err = new Err('Recipe not found');
			err.name = "RecipeNotFound";
			throw err;
		}
		// Send output.
		return Promise.resolve(recipes);
	}
	catch(error){
		return Promise.reject(error);
	}
}

