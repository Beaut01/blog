import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer} from '@react-navigation/native'

import MainStackNav from './StackMainNavigator'
import BookedStackNav from './StackBookedNav'
import StackCreate from './StackCreate'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return(       
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size }) => {
                        let iconName

                        if (route.name === 'Main') {
                            iconName = 'home' 
                        } else if (route.name === 'Booked') {
                            iconName = 'star' 
                        } else if (route.name === 'Create') {
                            iconName = 'camera'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                })}
                tabBarOptions={{
                    activeTintColor: '#663399',
                    inactiveTintColor: 'gray',
                  }}
            >
                <Tab.Screen 
                    name='Main'
                    component={MainStackNav}
                    options={{
                        title:'Главная'
                    }}
                />
                <Tab.Screen 
                    name='Booked'
                    component={BookedStackNav}
                    options={{
                        title:'Избранное'
                    }}
                />
                <Tab.Screen 
                    name='Create'
                    component={StackCreate}
                    options={{
                        title:'Создать'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer> 
    )
}