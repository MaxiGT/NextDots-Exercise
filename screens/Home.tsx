import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { ApplicationStateReducer } from "types/ApplicationState";
import Spinner from "../components/Spinner";
import { connect } from "react-redux";

type IncomingProps = {
    navigation: any;
    isFetching: boolean;
}

const HomeScreen = (props: IncomingProps) => {
    return(
        <View style={styles.screenContainer}>
            {
                props.isFetching ? 
                    (
                        <Spinner />
                    ) :
                    (
                        <View style={styles.homeContainer}>
                            <Text style={styles.homeTitle}>Home Screen</Text>
                            <Button title={'Search your favorite cocktails'}
                                onPress={() => props.navigation.navigate('Search')} />
                        </View>
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
    },
    homeContainer: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '80%'
    },
    homeTitle: {
        textAlign: 'center',
        marginBottom: 20
    },
});

const mapStateToProps = (state: ApplicationStateReducer) => {
    return {
        isFetching: state.cocktailReducer.isFetching,
    }
}

export default connect(mapStateToProps)(HomeScreen);