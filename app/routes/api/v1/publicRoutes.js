module.exports = {
	'GET /status': 'APIController.getStatus',

	// User:
	'POST /auth/register': 'UsersController.register',
	'POST /auth/login': 'UsersController.login',
	'POST /auth/validate': 'UsersController.validate',
	'POST /auth/refresh': 'UsersController.refresh',
	'POST /auth/logout': 'UsersController.logout',	

	// Recipe
	'GET /recipes': 'RecipesController.getAll',
	'GET /recipes/:id': 'RecipesController.getOne',
	'GET /sort/recipes/:sorttype': 'RecipesController.getAllWithSort',
	'GET /search/recipes/:query': 'RecipesController.searchedRecipes',

	//Category
	'GET /categories': 'CategoriesController.getAll',
	'GET /category/:id': 'CategoriesController.getOne', 
};
