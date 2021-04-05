import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'

const MainStack = createStackNavigator()

export default function MainStackNav() {
    return(        
            <MainStack.Navigator>
                <MainStack.Screen 
                    name='Main'
                    component={MainScreen}
                    options={{
                        title: 'Главная',
                        headerTintColor: '#fff', 
                        headerStyle: {backgroundColor: '#663399'},
                        headerTitleStyle: {fontWeight: 'bold'},
                    }}
                />
                <MainStack.Screen 
                    name='Post'
                    component={PostScreen}
                    options={{
                        headerTintColor: '#fff',
                        headerStyle: {backgroundColor: '#663399'},
                        headerTitleStyle: {fontWeight: 'bold'},
                        title: 'Пост'
                    }}
                />
            </MainStack.Navigator>
    )
}