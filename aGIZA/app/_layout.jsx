import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'


SplashScreen.preventAutoHideAsync();

//const RooyLayout = () => {
    // const [fontsLoaded, error] = useFonts({
    //     "SpaceMono-Regular": require("./assets/fonts/SpaceMono-Regular.ttf"),
    // });

    useEffect(() => {
        if(error) throw error;

        if(fontsLoaded) SplashScreen.hideAsync();
     [fontsLoaded, error]});

    if(!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        )


export default RooyLayout