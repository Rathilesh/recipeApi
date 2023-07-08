const { 
	createOKResponse,
	createErrorResponse
} = require('#factories/responses/api');
// Custom error.
const { Err } = require('#factories/errors');
const recipe = require('../../facades/recipe');

module.exports = RecipesController;

function RecipesController() {

	const _processError = (error, req, res) => {
		// Default error message.
		let errorMessage = error?.message ?? 'Internal server error';
		// Default HTTP status code.
		let statusCode = 500;

		switch(error.name) {
			case('Unauthorized'):
				errorMessage = 'Email or password are incorrect.';
				statusCode = 406;
				break;
			case('ValidationError'):
				errorMessage = "Invalid email OR password input";
				statusCode = 401;
				break;
			case('InvalidToken'):
				errorMessage = 'Invalid token or token expired';
				statusCode = 401;
				break;
			case('RecipeNotFound'):
				errorMessage = "Such user doesn't exist";
				statusCode = 400;
				break;

			// Perform your custom processing here...

			default:
				break;
		}

		// Send error response with provided status code.
		return createErrorResponse({
			res, 
			error: {
				message: errorMessage
			},
			status: statusCode
		});
	}

    const _getAll = async (req, res) => {
        recipe.getAll().then((data) => {
            if(!data){
              return _processError('RecipeNotFound', req, res);
            }
            return createOKResponse({
				res, 
				content:{
					data
				}
			});
    
          })
          .catch((err) => {
            console.error("RecipesController._getAll error: ", err);
			return _processError(err, req, res);
          });
    };

      return {
		getAll: _getAll
	}
    

}
