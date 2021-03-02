import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      // On the Mount (Focus)
      console.log("The Home Screen Mounted");

      return () => {
        // On the Un-mount (Blur)
        console.log("The Home Screen Un-Mounted");
      };
    }, [])
  );
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Messages")}
        title="Go to my Messages"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
