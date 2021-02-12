import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { Platform, Text } from 'react-native'
import { AppLoading } from 'expo'
import Navigation from './app/navigations/Navigation'

const App = () => {
  const [loadedData, setLoadedData] = useState(false)

  useEffect(() => {
    const fetchFonts = async () => {
      await Font.loadAsync({
        Heavitas: require('./assets/fonts/Heavitas.ttf'),
        'AvenirLTStd-Book': require('./assets/fonts/AvenirLTStd-Book.otf'),
        'texgyreadventor-regular': require('./assets/fonts/texgyreadventor-regular.otf'),
        'texgyreadventor-bold': require('./assets/fonts/texgyreadventor-bold.otf'),
      })

      setLoadedData(true)
    }

    fetchFonts()
    return () => {}
  }, [])

  if (!loadedData) {
    if (Platform.OS === 'ios') {
      return <Text>Cargando...</Text>
    } else {
      return <AppLoading />
    }
  }

  return <Navigation />
}

export default App
