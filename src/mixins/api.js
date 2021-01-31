export default class ApiService {
    _apiBase = `https://www.iport.ru/upload/front/data.json`;

    async getResource() {
        const res = await fetch(this._apiBase, {mode: 'no-cors'});

        console.log(res)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${this._apiBase}`);
        }
        return await res.json();
    
        // return await res.json();
    }
}