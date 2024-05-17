import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../constants'
import React from 'react'

const tabBarIcon = ({ icon, color, focused }) => {
    return (
        <View className="item-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs screenOptions={{tabBarShowLabel: false}}>
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
                />
            <Tabs.Screen 
                name="bookmark" 
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <tabBarIcon 
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    )
                }}
                />
            <Tabs.Screen 
                name="create" 
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <tabBarIcon 
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    )
                }}
                />
            <Tabs.Screen 
                name="profile" 
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <tabBarIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
                />
        </Tabs>
    </>
  )
}

export default TabsLayout