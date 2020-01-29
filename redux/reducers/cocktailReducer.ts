import { initialState } from "../initialState";
import { ApplicationState } from "types/ApplicationState";
import { actionTypes } from "../actions/actionTypes";

export default function cocktailReducer (state: ApplicationState = initialState(), action: any) {
    switch (action.type) {
        case actionTypes.FETCHING_REQUEST:
            return {
                ...state, isFetching: true
            }
        case actionTypes.FETCH_DRINKS_SUCCESS:
            return {
                ...state, isFetching: false, cocktails: action.payload
            }
        case actionTypes.SET_FILTER:
            return {
                ...state, filter: action.payload
            }
        case actionTypes.CLEAR_FILTER:
            return {
                ...state, filter: '', cocktails: []
            }
        default:
            return { ...state };
    }
}