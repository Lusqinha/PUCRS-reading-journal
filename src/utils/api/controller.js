import api from "../../services/api";

export class ApiController {
    constructor() {
        this.api = api;
    }

    async get_all() {
        const response = await this.api.get("/books");
    }
}