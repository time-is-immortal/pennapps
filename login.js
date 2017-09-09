import React from 'react';
import { StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
 } from 'react-native';

import { Permissions, Notifications } from 'expo';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Login',
    }
  state = {
    username: '',
    password: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
        Code Red
        </Text>
        <Text>
        A Good Samaritan is on their way!
        </Text>


          <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ username: text })}
                />

          <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ password: text })}
                />


           <TouchableOpacity
            style={styles.button}
            onPress = {this._onLogin}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
              onPress = {this._onSignUp}>
            <Text>Sign Up</Text>
          </TouchableOpacity>

        </View>
    );
  }
}


 _onLogin = () => {
    this.props.navigation.navigate("map");

    //need to connect to use fetch to connect to database
    // tcp:

}

_onSignUp = async () => {
  console.log("sign up btn works");

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    margin: 25,
    padding: 5,
  },
  button: {
    padding: 30,
  },
});
