module.exports = {
    400 : {
        statusCode: 400,
        error: new Error('all fields are mandatory')
        
    },
    wrong_data: {
        statusCode: 400,
        error: new Error ('username or password incorrect')
     },

    404:{
        statusCode: 404,
        error: new Error ('path not found')
    },
    401:{
        statusCode: 401, 
        error: new Error('unauthorized')
    },
    500:{
        statusCode:500,
        error: new Error('something went wrong')
    }
     

}