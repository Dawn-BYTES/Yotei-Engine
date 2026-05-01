import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

const Login = () => {

    const handleSubmit = () => {
        console.log('login form submitted')
    }

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <Spacer />

    <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>
          Login
        </Text>
    </ThemedButton>

      <Spacer />

      <Link href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>
          Don't have an account? Register here
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8
  },
})