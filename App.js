import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Navigation from './app/navigations/Navigation'

/**
 * Load fonts
 * @returns {Promise}
 */
const fetchFonts = () => {
  return Font.loadAsync({
    'Heavitas': require('./assets/fonts/Heavitas.ttf'),
    'AvenirLTStd-Book': require('./assets/fonts/AvenirLTStd-Book.otf'),
    'texgyreadventor-regular': require('./assets/fonts/texgyreadventor-regular.otf'),
    'texgyreadventor-bold': require('./assets/fonts/texgyreadventor-bold.otf')
  })
}

/**
 * Initialize Wiskipix App.
 * @returns {JSX}
 */
const App = () => {
  const [loadedData, setLoadedData] = useState(false)

  if (!loadedData) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoadedData(true)}
      />
    )
  }

  return (
    <Navigation />
  )
}

export default App
