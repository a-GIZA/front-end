import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

import { images } from '../constants'

export default function App()  {
  return (
    <SafeAreaView classname="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View classname="w-full justify-center items-center h-full px-4">
          <Image 
            source={images.aGIZA}
            classname="w-[130px] h-[84px]"
            resizeMode="contai"
          />
          <Image 
            source={images.undraw_on_the_way_re_swjt}
            classname="max-w--[380px] w-full h-[300px]"
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
