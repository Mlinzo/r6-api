const ApiEror = require("../exceptions/ApiError");
const generalService = require("../services/generalService");

class generalController {
    async general(req, res, next) {
        try {   
            const [platform, username] = Object.values(req.params);
            const result = await generalService.general(platform, username);
            if (result instanceof Object) 
                return res.json(result);
            if (result === 'TIME_OUT')
                return next(ApiEror.NoSuchUserError());
                throw new ApiEror(400, result)
        } catch (e) { next(e); }
    }

    async casual(req, res, next) {
        try {   
            const [platform, username] = Object.values(req.params);
            const result = await generalService.casual(platform, username);
            if (result instanceof Object) 
                return res.json(result);
            if (result === 'TIME_OUT')
                return next(ApiEror.NoSuchUserError());
            throw new ApiEror(400, result)
        } catch (e) { next(e); }
    }
    
    async rank(req, res, next) {
        try {   
            const [platform, username] = Object.values(req.params);
            const result = await generalService.rank(platform, username);
            if (result instanceof Object) 
                return res.json(result);
            if (result === 'TIME_OUT')
                return next(ApiEror.NoSuchUserError());
        } catch (e) { next(e); }
    }

    async deathmatch(req, res, next) {
        try {   
            const [platform, username] = Object.values(req.params);
            const result = await generalService.deathmatch(platform, username);
            if (result instanceof Object) 
                return res.json(result);
            if (result === 'TIME_OUT')
                return next(ApiEror.NoSuchUserError());
            if (result === 'NEVER_PLAY')
                return next(ApiEror.NeverPlayedError());
            throw new ApiEror(400, result)
        } catch (e) { next(e); }
    }

    async operator(req, res, next) {
        try {   
            const [platform, username, operator] = Object.values(req.params);
            const result = await generalService.operator(platform, username, operator);
            if (result instanceof Object) 
                return res.json(result);
            // if (result === 'TIME_OUT')
            //     return next(ApiEror.NoSuchUserError());
            // if (result === 'NEVER_PLAY')
            //     return next(ApiEror.NeverPlayedError());
            throw new ApiEror(400, result)
        } catch (e) { next(e); }
    }
};

module.exports = new generalController();