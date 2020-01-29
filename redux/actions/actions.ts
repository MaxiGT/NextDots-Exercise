import { actionTypes } from "./actionTypes";
import ApiService from "../../services/apiService";
import { Cocktail } from "types/Cocktail";
import { ToastAndroid } from "react-native";

// Fetch Drinks List Success
export type FetchDrinksSuccess = {
    type: typeof actionTypes.FETCH_DRINKS_SUCCESS,
    payload: Cocktail[]
};

export const fetchDrinksSuccess = (payload: Cocktail[]) => ({
    type: actionTypes.FETCH_DRINKS_SUCCESS,
    payload
});

// Generif API Request - isFetching = true
export type FetchRequest = {
    type: typeof actionTypes.FETCHING_REQUEST
};

export const fetchRequest = () => ({
    type: actionTypes.FETCHING_REQUEST
});

// Clear Filter
export type ClearFilter = {
    type: typeof actionTypes.CLEAR_FILTER
};

export const clearFilter = () => ({
    type: actionTypes.CLEAR_FILTER
});

// Filter Change
export type FilterChange = {
    type: typeof actionTypes.FETCH_DRINKS_SUCCESS,
    payload: Cocktail[]
};

export const filterChange = (payload: string) => ({
    type: actionTypes.SET_FILTER,
    payload
});

// API Involved Methods
export const searchDrinks = (filter: string) => async (dispatch: any) => {
    dispatch(fetchRequest());
    const service = new ApiService();
    try {
        const drinks = await service.searchDrinks(filter);
        dispatch(fetchDrinksSuccess(drinks));
    } catch (error) {
        ToastAndroid.show(`Error: ${error}`, ToastAndroid.LONG);
    }
}
