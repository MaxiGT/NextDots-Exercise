import { Cocktail } from "./Cocktail";

export type ApplicationState = {
    cocktails: Cocktail[];
    filter: string;
    isFetching: boolean;
    error: any;
};

export type ApplicationStateReducer = {
    cocktailReducer: ApplicationState
};