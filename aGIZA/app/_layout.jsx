import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <view style={styles.container}>
            <text>Open your App</text>
            <StatusBar style='auto' />
        </view>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});