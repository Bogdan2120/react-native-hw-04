import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
} from "react-native";

import { useRoute } from "../router";

const initialState = {
  name: "",
  location: "",
};

const CreatePostScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const submitForm = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    useRoute(state);
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.createPostScreen}>
        <View style={styles.imgPostBody}>
          <View style={styles.imgBody}>
            <ImageBackground>
              <TouchableOpacity onPress={() => alert("Create new img")}>
                <View style={styles.imgNewPostBody}>
                  <Image
                    style={styles.imgNewPost}
                    source={require("../assets/images/CreateImgPost.png")}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <Text style={styles.imgPostText}>Upload a photo</Text>
        </View>

        <View style={styles.bodyFormCreatePost}>
          <View style={styles.formCreatePostn}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.inputNamePost}
                name="NamePost"
                value={state.name}
                placeholder="Name post..."
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, name: value }))
                }
              />
              <TextInput
                style={styles.inputLocationPost}
                placeholder="Location"
                name="location"
                value={state.location}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, location: value }))
                }
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={{
                ...styles.button,
                marginBottom: isShowKeyboard ? 32 : 66,
              }}
              onPress={submitForm}
            >
              <Text style={styles.buttonText}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  createPostScreen: {
    paddingTop: 32,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgPostBody: {
    marginBottom: 48,
  },
  imgBody: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
  },
  imgNewPostBody: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },
  imgPostText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  inputNamePost: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  inputLocationPost: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  button: {
    width: "100%",
    height: 50,
    padding: 16,
    color: "#212121",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
