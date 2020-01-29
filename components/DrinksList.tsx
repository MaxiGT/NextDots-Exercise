import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from "react-native"
import { Cocktail } from "../types/Cocktail";
import CocktailItem from './Cocktail';

type IncomingProps = {
    cocktails: Cocktail[];
}

const DrinksList = (props: IncomingProps) => {
    return (
        <View>
            <FlatList
                data={props.cocktails}
                keyExtractor={item => item.idDrink}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        key={item.idDrink}
                        onPress={() => {}}>
                                <CocktailItem name={item.strDrink} imgSrc={item.strDrinkThumb} />
                    </TouchableOpacity>
                )}
                initialNumToRender={5}
                maxToRenderPerBatch={3}
            />
        </View>
    )
}

export default DrinksList;