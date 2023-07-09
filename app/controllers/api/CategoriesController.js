const { 
	createOKResponse,
	createErrorResponse
} = require('#factories/responses/api');
// Custom error.
const { Err } = require('#factories/errors');
const category = require('../../facades/category');

module.exports = CategoriesController;

function CategoriesController() {

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
			case('CategoryNotFound'):
				errorMessage = "Such category doesn't exist";
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
        category.getAll().then((data) => {
            if(!data){
              return _processError('CategoryNotFound', req, res);
            }
            return createOKResponse({
				res, 
				content:{
					data
				}
			});
    
          })
          .catch((err) => {
            console.error("CategoriesController._getAll error: ", err);
			return _processError(err, req, res);
          });
    };


	const _getOne = async (req, res) => {
        category.getOne(req.params.id).then((data) => {
            if(!data){
              return _processError('CategoryNotFound', req, res);
            }
            return createOKResponse({
				res, 
				content:{
					data
				}
			});
    
          })
          .catch((err) => {
            console.error("CategoriesController._getOne error: ", err);
			return _processError(err, req, res);
          });
    };

      return {
		getAll: _getAll,
		getOne: _getOne
	}
    

}
