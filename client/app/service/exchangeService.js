const config = {
    api: null
};

export function apiProvider($http) {
    'ngInject';
    if(!config.api) {
        config.api = new Api($http);
    }
    return config.api;
}

export function getApiProvider() {
    if(!config.api) throw new Error('api not yet initialized.');
    return config.api;
}

export class Api {

    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getEurUsdExchange() {
        debugger;
        return this.$http.get('https://api.fixer.io/latest?symbols=USD');
    }

}
