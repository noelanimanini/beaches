import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: "",
  offlineAccess: true,
});

export default function LoginScreen() {
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        "jane.doe@example.com",
        "SuperSecretPassword!"
      )
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };
  return (
    <>
      <View>
        <Button title="create user" onPress={() => createUser()}></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
