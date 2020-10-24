import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import About from './screens/about'
import ReviewDetails from './screens/reviewdetails'
import Navigator from './routes/homeStack'
// import Navigator from './routes/homeStack'
// import * as Font from 'expo-font'
// import {AppLoading} from 'expo'

//const getFont=()=>{
//   return Font.loadAsync({
//     'nunito-regular':require('./assets/fonts/AnonymousProB.ttf'),
//     'nunito-bold':require('./assets/fonts/AnonymousPro.ttf')
//   })
// }

export default function App() {
return(
  <Navigator/>
  // <About/>
  // <ReviewDetails/>
)
}


