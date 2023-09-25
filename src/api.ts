import axios from "axios";

export const API_URL = 'https://rune-fast-api.vercel.app'
export class API {
    #api: string

    constructor(apiUrl?: string) {
        this.#api = apiUrl || API_URL
    }

    /**
     * Send a GET request.
     */
    async get(endpoint: string, variables?: object): Promise<any> {
        try {
           return await axios({
                url: `${this.#api}${endpoint}`,
                ...(variables || {})
            })
        } catch (e: unknown | any) {
            throw new Error(e)
        }
    }
}