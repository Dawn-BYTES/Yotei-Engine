import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import ThemedLogo from '../components/ThemedLogo'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'
import Spacer from '../components/Spacer'


const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.image} />
        
      <ThemedText style={styles.title} title={true}>
        Yotei Engine
      </ThemedText>
      
      <Spacer height={10} />
      <ThemedText>
        Personalized Study Management App
      </ThemedText>
    
    <Spacer height={20}/>
      <ThemedCard style={[styles.card]}>
        <ThemedText>
          A focus-based engine by students, for students.
        </ThemedText>
      </ThemedCard>
 
      <Spacer height={40} />

      <Link href={"/login"} style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href={"/register"} style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>

      <Link href={"/profile"} style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>

    </ThemedView> 
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    image: {
      marginVertical: 20,
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
     link: {
      marginVertical: 10,
      borderBottomWidth: 1,
    },
    
    card: {
      padding: 20,
      borderRadius: 5,
      boxShadow: '4px 4px rgba(0,0,0,0.1)',
    }
})  