class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        Error=[],
        stack=""
    ){
        
    }
}