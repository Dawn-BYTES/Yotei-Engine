import { Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorscheme = useColorScheme()
  const theme = Colors[colorscheme] ?? Colors.light
  
  return (
    <>
    <StatusBar value="auto" />
      <Stack screenOptions={{contentStyle: { backgroundColor: '#fff'},
       headerStyle: { backgroundColor: theme.navbackground },
       headerTintColor: theme.title, 
       }}>
        <Stack.Screen name="index" options={{ title: 'Home', headerBackVisible: false,}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false}} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false}} />
      </Stack>
      </> 
  )
}

export default RootLayout

const styles = StyleSheet.create({})