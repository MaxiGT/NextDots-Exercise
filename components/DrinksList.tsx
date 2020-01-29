import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from "react-native"
import { Cocktail } from "../types/Cocktail";
import CocktailItem from './Cocktail';

type IncomingProps = {
    cocktails: Cocktail[];
    searchCriteria: string
}

const DrinksList = ({
    cocktails,
    searchCriteria
}: IncomingProps) => {

    const emptyList = () => (
        <View>
            <Text>
                `${ searchCriteria && searchCriteria.length > 0 ?
                    'No se encontraron resultados para la búsqueda realizada.' :
                    'Loading ....'}`
            </Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={cocktails}
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
                ListEmptyComponent={emptyList}
            />
        </View>
    )
}

export default DrinksList;