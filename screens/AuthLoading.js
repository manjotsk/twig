import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Image
} from "react-native";
import { TapGestureHandler, TextInput } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userToken');
    // alert("in auth");
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  doubleTapRef = React.createRef();
  // Render any loading content that you like here
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        <View style={{ height: 50, backgroundColor: "skyblue" }}>
          <TextInput
            style={{ height: 50 }}
            placeholder="Your Name"
            style={{ alignSelf: "center" }}
          />
        </View>
        <View style={{ height: 50, backgroundColor: "steelblue" }}>
          <TextInput
            style={{ height: 50 }}
            placeholder="Their name"
            style={{ alignSelf: "center" }}
          />
        </View>
      </View>
    );
  }
}
