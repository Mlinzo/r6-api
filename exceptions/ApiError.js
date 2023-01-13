module.exports = class ApiEror extends Error {
    status;
    errors;

    constructor(status, message, errors = []){
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequestError(message, errors = []) { return new ApiEror(400, message, errors) }

    static NotFoundError() { return new ApiEror(404, 'Not Found', []) }

    static NoSuchUserError() { return new ApiEror(400, 'No such user exists', []) }

    static NeverPlayedError() { return new ApiEror(400, 'User never played this mode', []) }

}