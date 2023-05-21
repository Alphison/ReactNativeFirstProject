import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import News from '../components/News'

const Stack = createStackNavigator()

export const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Главная', headerStyle: {
                        backgroundColor: '#455d7a',
                        height: 110,
                    },
                    headerTitleStyle: {
                        color: 'white',
                    }}}
                />
                <Stack.Screen
                    name="News"
                    component={News}
                    options={{title: 'Статья'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}