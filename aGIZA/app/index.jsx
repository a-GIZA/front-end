import { StatusBar } from 'expo-router'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'


  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className= "text-3xl font-pbblack">aGIZA</Text>
      <StatusBar style="auto" />
      <Link to="/profile">Go to Profile</Link>
    </View>
  )
