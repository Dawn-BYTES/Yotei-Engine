import { Image, useColorScheme } from 'react-native'

import DarkLogo from '../assets/Logo/Renshuu_Logo_Transparent.png'
import LightLogo from '../assets/Logo/Renshuu_Logo.png'

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return <Image source={logo} style={style} {...props} />
}

export default ThemedLogo