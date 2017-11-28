class empresarialService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
    }

    getServices() {
        return axios.get(this.baseUrl + 'postServices');
    }
}

class personalizadoService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
    }

    getServices() {
        return axios.get(this.baseUrl + 'postServices');
    }
}

class cityTourService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
    }

    getServices() {
        return axios.get(this.baseUrl + 'postServices');
    }
}


class fleets {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
    }

    getFleet() {
        return axios.get(this.baseUrl + 'postFleet');
    }
}