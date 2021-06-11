import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import logo from "../images/beachlogo.png";

export default function SplashScreen({navigation}) {
   return (
       <>
       <ImageBackground style={styles.background}>
       <View style={styles.logoContainer}>
           <Image source={require("../images/beachlogo.png")} style={styles.logo} />
       </View>
       </ImageBackground>
       
       </>
   )
}
const styles = StyleSheet.create({
    background:{
        backgroundColor:"#CBF3F0",
        width:"100%",
        height:"100%"
    },
    logoContainer:{
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        flexDirection:"column",
        flex:1
    },
    logo:{
        width:"90%",
        height:"90%",
        resizeMode:"contain",
     
    }
})