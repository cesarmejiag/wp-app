import React, { useState } from 'react'
import Navigation from './app/navigations/Navigation'
import { firebaseApp } from './app/utils/firebase'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
      'Heavitas': require('./assets/fonts/Heavitas.ttf'),
      'AvenirLTStd-Book': require('./assets/fonts/AvenirLTStd-Book.otf'),
      'texgyreadventor-regular': require('./assets/fonts/texgyreadventor-regular.otf'),
      'texgyreadventor-bold': require('./assets/fonts/texgyreadventor-bold.otf')
  });
};

export default function App() {
  const [loadedData, setLoadedData] = useState(false);

  if (!loadedData) {
    return (
      <AppLoading 
        startAsync={ fetchFonts }
        onFinish={() => setLoadedData(true)}
      />
    )
  }

  return (
    <Navigation />
  );
}
