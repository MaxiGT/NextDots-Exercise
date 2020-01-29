import { Cocktail } from "../types/Cocktail";

const parseJson = async (res: Response) => {
    try {
        return await res.json();
    } catch (error) {
        return null;
    }
}

enum HttpMethods {
    POST = 'POST',
    GET = 'GET'
}

class ApiService {
    constructor() {}

    callApi = async (
        url: string,
        method: string,
        body?: string,
    ) => {
        const res = await fetch(
            url,
            {
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: body ? JSON.stringify(body) : undefined
            }
        );
        return await parseJson(res);
    }

    searchDrinks = (key: string) : Promise<{drinks: Cocktail[]}> => this.callApi(
        `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${key}`,
        HttpMethods.GET
    )
}

export default ApiService;