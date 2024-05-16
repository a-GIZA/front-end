import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../constants'
import React from 'react'

const tabBarIcon = ({ icon, color, focused }) => {
    return (
        <View>
            <Image 
                source={icon}
            />
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen 
                name="Home" 
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <tabBarIcon 
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
                component={Home} />
            <Tabs.Screen name="Create" component={Create} />
            <Tabs.Screen name="Bookmark" component={Bookmark} />
        </Tabs>
    </>
  )
}

export default TabsLayout