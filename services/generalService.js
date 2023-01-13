const R6 = require('../api/index.js')

class generalService {
    async general(platform, username) {
        return await R6.general(platform, username);
    }

    async casual(platform, username) {
        return await R6.casual(platform, username)
    }
    
    async rank(platform, username) {
        return await R6.rank(platform, username)
    }
    
    async deathmatch(platform, username) {
        return await R6.deathmatch(platform, username)
    }

    async operator(platform, username, operator) {
        return await R6.operator(platform, username, operator)
    }
};

module.exports = new generalService();