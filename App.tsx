import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
  );  
}