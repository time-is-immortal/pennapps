import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions} from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import MapView from 'react-native-maps'; //0.16.3
import "prop-types"; //15.5.10

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 39.9515;
const LONGITUDE = -75.1911;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  onPositionUpdate(newlocation){
   console.log(newlocation);
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      Location.watchPositionAsync({enableHighAccuracy:true}, this.onPositionUpdate);
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting...';
      if(this.state.errorMessage){
        text = this.state.errorMessage;
      }
      else if (this.state.location){
        text = JSON.stringify(this.state.location);
      }
    return (
      /*
     <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
     </View>
     */
     <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }} /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
