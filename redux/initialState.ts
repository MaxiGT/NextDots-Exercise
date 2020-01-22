import { ApplicationState } from "types/ApplicationState";

export function initialState(): ApplicationState {
    return {
        filter: '',
        error: {},
        isFetching: false,
        cocktails: []
    };
}