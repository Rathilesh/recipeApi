// Reference models.
const Recipe = require('#models/Recipe');
// Custom error.
const { Err } = require('#factories/errors');
const { Op } = require('sequelize');

module.exports = {
	getAll: _getAll,
	getOne: _getOne,
	getAllWithSort: _getAllWithSort,
	searchedRecipes: _searchedRecipes 
}

async function _getAll() {
	try{
		// Try to create new user.
		const recipes = await Recipe.findAll({
			order: [
				['createdAt', 'DESC']
			],
			limit: 10,
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
async function _getAllWithSort(sortType) {

	let sorting;

	switch (sortType) {
		case 'createdAt':
			sorting = {
				order: [
					['id', 'DESC']
				],
				limit: 10,
				include: 'category'
			}
			break;
			case 'totalLikes':
				sorting = {
					order: [
						['totalLikes', 'DESC']
					],
					limit: 10,
					include: 'category'
				}
				break;
	
		default:
			sorting = {
				limit: 10,
				include: 'category'
			}
			break;
	}

	
	try{
		// Try to create new user.
		const recipes = await Recipe.findAll(sorting);

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
async function _searchedRecipes(query) {

	console.log('query',query)
	
	try{
		const recipes = await Recipe.findAll(
			{
			where: 
			{
				[Op.or]: [
				  {
					name: {
					  [Op.like]: `%${query}%`
					}
				  },
				  {
					makingDescription: {
					  [Op.like]: `%${query}%`
					}
				  }
				  
				]
			  }}
		);

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
async function _getOne(id) {
	try{
		// Try to create new user.
		const recipe = await Recipe.findById(id);

		if(!recipe) {

			const err = new Err('Recipe not found');
			err.name = "RecipeNotFound";
			throw err;
		}
		// Send output.
		return Promise.resolve(recipe);
	}
	catch(error){
		return Promise.reject(error);
	}
}

