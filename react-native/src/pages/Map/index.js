import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import ButtonArea from '../ButtonArea';

export default class Map extends React.Component {
	state = {
		myLocation: null,
		fireMarkers: [],
		fireManMarkers: [],
		errorMessage: null,
	}

	componentWillMount() {
		this._getLocationAsync();
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'É necessária a permissão de localização'
			})
		}
		const { fireMarkers } = this.state;

		let loc_orig = await Location.getCurrentPositionAsync({});
		let location = {
			latitude: loc_orig.coords.latitude,
			longitude: loc_orig.coords.longitude,
			latitudeDelta: 0.0522,
			longitudeDelta: 0.0121
		}
		this.setState({
			myLocation: location
		});
	}

	_centerLocation = () => {
		this._getLocationAsync();
	}

	render() {
		const { myLocation, fireMarkers, errorMessage } = this.state;

		if (errorMessage) {
			return (
				<View style={styles.container}>
					<Text style={styles.paragraph}>errorMessage</Text>
				</View>
			);
		} else {
			return (
				<View style={styles.container}>
					<MapView
						style={styles.mapStyle}
						region={myLocation}
					// onRegionChange={ region => this.setState({myLocation: region}) } mudar p/ caso mude, aparecer botao de centering
					// onRegionChangeComplete={ region => this.setState({myLocation: region}) }
					>
						{myLocation == null ? null :
							<Marker
								key={0}
								coordinate={myLocation}
							/>
						}
						{fireMarkers.map((marker, index) => (
							<Marker
								key={index + 1}
								coordinate={marker}
							/>
						))}
					</MapView>

					<View style={styles.centerButton}>
						<TouchableOpacity onPress={ this._centerLocation }>
							<Text>sadyuhuj</Text>
						</TouchableOpacity>
					</View>
					<ButtonArea></ButtonArea>
				</View>
			);
		}

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		position: "absolute"
	},
	centerButton: {
		padding: 30,
		maxHeight: 100,
	}
});
