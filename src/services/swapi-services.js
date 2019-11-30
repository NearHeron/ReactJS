export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url} , received ${result.status}`);
        }

        return await result.json();
    }

    async getAllPeople() {
        const result = await this.getResource(`/people/`);
        return result.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets() {
        const result = await this.getResource(`/planets/`);
        return result.results;
    }

    getPlanet(id) {
        return this.getResource(`/planet/${id}`);
    }

    async getAllStarships() {
        const result = await this.getResource(`/starships/`);
        return result.results;
    }

    getStarship(id) {
        return this.getResource(`/starship/${id}`);
    }
}
