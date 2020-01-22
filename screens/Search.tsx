import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Cocktail } from "types/Cocktail";
import { ApplicationStateReducer } from "types/ApplicationState";
import { bindActionCreators } from "redux";
import { searchDrinks, filterChange, clearFilter } from "../redux/actions/actions";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import DrinksList from "../components/DrinksList";
import Spinner from '../components/Spinner';

type IncomingProps = {
    navigation: any;
    isFetching: boolean;
    searchDrinks: (filter: string) => void;
    filterChange: (filter: string) => void;
    clearFilter: () => void;
    cocktails: Cocktail[];
}

const SearchScreen = (props: IncomingProps) => {
    return(
        <View style={styles.screenContainer}>
            <SearchBar
                onSearch={props.searchDrinks}
                onFilterChange={props.filterChange}
                onClearFilter={props.clearFilter} />
            {
                props.isFetching ?
                    (
                        <Spinner />
                    ) :
                    (
                        <DrinksList cocktails={props.cocktails} />
                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
    }
});

const mapStateToProps = (state: ApplicationStateReducer) => {
    return {
        isFetching: state.cocktailReducer.isFetching,
        cocktails: state.cocktailReducer.cocktails
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        searchDrinks,
        filterChange,
        clearFilter
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);