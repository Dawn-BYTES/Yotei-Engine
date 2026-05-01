import { StyleSheet, View, useColorScheme } from "react-native"
import { Colors } from "../constants/Colors"

const ThemedCard = ({ style, children, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const backgroundColor = colorScheme === 'light' ? '#ffffff' : theme.uiBackground

    return (
        <View 
            style={[{backgroundColor}, styles.card, style]}
            {...props}
        >
            {children}
        </View>
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 5,
    }
})