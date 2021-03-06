import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { PokemonInfo } from '../screens/PokemonInfo';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="PokemonInfo"
                component={PokemonInfo}
            />
        </Navigator>
    );
}