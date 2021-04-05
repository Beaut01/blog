import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity} from 'react-native'

import { BookedScreen } from '../screens/BookedScreen'
import { PostScreen } from '../screens/PostScreen'
import { Ionicons } from '@expo/vector-icons'

const BookedStack = createStackNavigator()

export default function BookedStackNav() {
    return(        
            <BookedStack.Navigator>
                <BookedStack.Screen 
                    name='Booked'
                    component={BookedScreen}
                    options={{
                        title: 'Избранное' ,
                        headerTintColor: '#fff', 
                        headerStyle: {backgroundColor: '#663399'},
                        headerTitleStyle: {fontWeight: 'bold'},
                    }}
                />
                <BookedStack.Screen 
                    name='Post'
                    component={PostScreen}
                    options={{
                        headerTintColor: '#fff',
                        headerStyle: {backgroundColor: '#663399'},
                        headerTitleStyle: {fontWeight: 'bold'}, 
                        title: ''
                    }}
                />
            </BookedStack.Navigator>
    )
}