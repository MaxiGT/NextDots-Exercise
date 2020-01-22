import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './Home';
import SearchScreen from './Search';

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: `Home`,
                animationEnabled: true,
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: `Drinks List`,
                animationEnabled: true,
            }
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            animationEnabled: true,
        },
    }
);

export const AppContainer = createAppContainer(RootStack);