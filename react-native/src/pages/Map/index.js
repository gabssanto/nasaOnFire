import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
  state = {
    location: null,
    errorMessage: null,
    markers: []
  }

  componentWillMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    let loc_orig = await Location.getCurrentPositionAsync({});
    let location = { latitude: loc_orig.coords.latitude,
                        longitude: loc_orig.coords.longitude,
                        latitudeDelta: 0.0522,
                        longitudeDelta: 0.0121 }
    const { markers } = this.state;
    this.setState(
        { 
            location: location,
            markers: [...markers, loc_orig.coords]
        });
  }

  render() {
    const { location, markers } = this.state;

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} region={location}>
        {markers.map((marker, index) => (
            <Marker
                key={index}
                coordinate={marker}
                title={"Ola mundo"}
                description={"Tchau mundo"}
            />
        ))}
        </MapView>
        
        {/* markers.map(marker => (
          <Marker 
            coordinate={marker}
          />
        )) */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
