import React, { useCallback, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "./firebase";
import * as firebase from "firebase";
import { useFocusEffect } from "@react-navigation/native";

const Messages = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = db
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );

      return () => {
        unsubscribe();
      };
    }, [])
  );

  console.log(messages);

  const sendMessage = () => {
    console.log("Message SENT >>>", input);

    db.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={messages}
        renderItem={({ item, Index }) => (
          <TouchableOpacity onPress={() => alert(item.data.message)}>
            <Text>{item.data.message}</Text>
          </TouchableOpacity>
        )}
      />
      <TextInput
        value={input}
        onSubmitEditing={sendMessage}
        onChangeText={(text) => setInput(text)}
        placeholder="Type a message..."
      />
      <Button
        style={styles.sendButton}
        onPress={sendMessage}
        title="Send Message"
      />
    </View>
  );
};

//rn.mobile.ant.design

export default Messages;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  flatList: {
    flexGrow: 1,
    // overflow: "scroll",
  },

  sendButton: {},
});
