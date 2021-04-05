import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CreateScreen} from '../screens/CreateScreen'

const Create = createStackNavigator()

export default function StackCreate() {
    return (
        <Create.Navigator>
            <Create.Screen 
                name='Create'
                component={CreateScreen}
                options={{ 
                    headerTintColor: '#fff',
                    title: 'Создание Поста',
                    headerStyle: { backgroundColor: '#663399'}
                }}
            />
        </Create.Navigator>
    )
}