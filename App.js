import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Router } from './router/Router';


const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
})


export default function App() {
  const [font, setFont] = useState(false)
  
  if(font){
    return (
      <Router />
    );
  }else{
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    )
  }
}

const styles = StyleSheet.create({
  
});
