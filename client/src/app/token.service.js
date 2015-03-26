'use strict';

var TokenService = {
    getToken: function() {
        var expirationDate = new Date(localStorage.tokenExpiration),
            token = localStorage.token,
            now = new Date();

        if (token && expirationDate && now.getTime() < expirationDate.getTime()) {
            return token;
        }
    },
    setToken: function(token, toExpiration) {
        var now = new Date(),
            expirationDate = new Date(now.getTime() + (toExpiration * 1000));

        localStorage.token = token;
        localStorage.tokenExpiration = expirationDate;
    }
};

module.exports = TokenService;
