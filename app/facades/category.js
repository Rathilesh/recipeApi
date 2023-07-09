// Reference models.
const Category = require('#models/Category');
// Custom error.
const { Err } = require('#factories/errors');

module.exports = {
	getAll: _getAll,
	getOne: _getOne
}

// Auth:
async function _getAll() {
	try{
		const categories = await Category.findAll();

		if(!categories) {

			const err = new Err('Category not found');
			err.name = "CategoryNotFound";
			throw err;
		}
		// Send output.
		return Promise.resolve(categories);
	}
	catch(error){
		return Promise.reject(error);
	}
}


async function _getOne(id) {
	try{
		// Try to create new user.
		const category = await Category.findOne({ where: { id: id },include: 'recipe' });
		// const category = await Category.findById(id,{
		// 	include: 'recipe'
		// });

		if(!category) {

			const err = new Err('Category not found');
			err.name = "CategoryNotFound";
			throw err;
		}
		// Send output.
		return Promise.resolve(category);
	}
	catch(error){
		return Promise.reject(error);
	}
}

