import React, { useState, useEffect } from "react";
import SplashScreen from 'react-native-splash-screen';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Alert,
} from "react-native";

export default function SplashScreen({navigation}) {
   return (
       <>
       <View>
           <Image source={"../images/beach_logo.svg"}/>
       </View>
       </>
   )
}