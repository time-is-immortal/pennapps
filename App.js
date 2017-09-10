import React from 'react';
import { StyleSheet,
  Text,
  TouchableOpacity,
  AppRegistry,
  View,
  TextInput
 } from 'react-native';

import { Permissions, Notifications } from 'expo';
import {StackNavigator,} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'}

  constructor(props) {
    super(props);
    this._onLogin = this._onLogin.bind(this);
    this._onSignUp = this._onSignUp.bind(this);
  }
  state = {
    username: '',
    password: '',
  }
  _onLogin() {
    console.log("login btn pressed");
     this.props.navigation.navigate("Home");

 }

 _onSignUp = () => {
     console.log("sign up btn works");
   this.props.navigation.navigate("Home");


 }
  render = () => {
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
             onPress={this._onLogin}>
           <View
            style={styles.button}>
            <Text>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._onSignUp}>
            <View
            style={styles.button}>
            <Text>Sign Up</Text>
            </View>
          </TouchableOpacity>

          export default StackNavigator({
              Home: {  screen: Homescreen,  },
                });

        </View>
    );
  }
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
