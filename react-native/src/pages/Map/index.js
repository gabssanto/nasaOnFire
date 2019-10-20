import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import ButtonArea from '../ButtonArea';
import { CenterButton, ButtonCloseReport, ViewReport } from "./styles";

import SlideToConfirm from 'react-native-slide-to-confirm';

import firebase from 'firebase';

export default class Map extends React.Component {

	constructor() {
		super();

		this.ref = firebase.firestore().collection('fires');
		this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
		this.state = {
			myLocation: null,
			showLocation: null,
			fireMarkers: [],
			fireManMarkers: [],
			errorMessage: null,
			centerButtonVisibility: true,
			hasToInsertFire: false,
			reportVisibility: false,
			buttonAreaVisibility: true
		}	
	}

	onCollectionUpdate = (querySnapshot) => {
		const { fireMarkers } = this.state;
		this.setState({
			fireMarkers: []
		});

		querySnapshot.forEach((locs) =>{
			const { loc } = locs.data();
			this.setState({
				fireMarkers: [...fireMarkers, loc]
			})
		});	
	}

	componentWillMount() {
		this._getLocationAsync();
    }

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'É necessária a permissão de localização'
			});
			return;
		}

		let loc_orig = await Location.getCurrentPositionAsync({});
		let location = {
			latitude: loc_orig.coords.latitude,
			longitude: loc_orig.coords.longitude,
			latitudeDelta: 0.0522,
			longitudeDelta: 0.0121
		}
		
		this.setState({
			myLocation: location,
			showLocation: location
		});
	}

	_centerMap = () => {
		const { myLocation } = this.state;
		this.setState({
			showLocation: myLocation
		});
	}

	insertFire = () => 	{
		/*console.log("inserindo fogo");
		const { fireMarkers, showLocation } = this.state;
		this.setState({
			hasToInsertFire: false,
			fireMarkers: [...fireMarkers, { location: showLocation, title: "Adicionar um título?", descricao: "Adicionar uma descricao aumenta a prioridade do seu chamado" }] 
		});*/
		const { showLocation } = this.state;
		this.ref.add({
			location: showLocation	
		}).then(() => {
			this.ref.onSnapshot(this.onCollectionUpdate);
		})
		  .catch((error) => {
			console.log(error);
		  });
	}

	toggleReport = () => {
		if(this.state.buttonAreaVisibility){
			this.setState({
				buttonAreaVisibility: false,
				reportVisibility: true
			});
		} else {
			this.setState({
				buttonAreaVisibility: true,
				reportVisibility: false,
			})
		}
	}

	render() {
		const { myLocation, fireMarkers, errorMessage, centerButtonVisibility, showLocation, reportVisibility, buttonAreaVisibility } = this.state;

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
						initialRegion={myLocation}
						region={showLocation}
						//onRegionChange={ region => this.setState({showLocation: region}) }
						onRegionChangeComplete = { region => this.setState( {showLocation: region}) }
					>
                        {myLocation == null ? null :
							<Marker
								key={0}
								coordinate={myLocation}
								image={require("../../../assets/MyLocation.png")}
							/>
						}
						{fireMarkers.map((marker, index) => (
							<Marker
								key={index + 1}
								coordinate={marker.location}
								image={require("../../../assets/fireInMap.png")}
								title={marker.title}
								description={marker.descricao}
							>
								<Callout tooltip>
									<TouchableHighlight onPress = { () => console.log("oi") } underlayColor="#ddd">
										<View>
											<Text>{marker.title}{"\n"}{marker.description}</Text>
										</View>
									</TouchableHighlight>
								</Callout>
							</Marker>
						))}
					</MapView>
					
					{centerButtonVisibility ? 
						<CenterButton>
							<TouchableOpacity onPress={ this._centerMap }>
								<Image source={require('../../../assets/relocation.png')}/>
							</TouchableOpacity>
						</CenterButton>
						: null
					}	
					
					{buttonAreaVisibility ?
						<ButtonArea subprops={this.props} centerMap={this._centerMap} toggleReport={this.toggleReport}></ButtonArea>
						:null
					}

					{reportVisibility ? 
						<ViewReport
						// Report Screen
						>
						<SlideToConfirm
							ref={ref => this.slideRef = ref}
							width={347}
							onConfirm={()=>{
								this.insertFire();
								this.toggleReport();
							}}
							textColor='white'
							pathCoverColor='#00c10f'
							pathColor='#d02929'
							sliderColor='white'
							text='Deslize para confirmar'
							/>
							<ButtonCloseReport onPress={ () => { this.toggleReport() } }>
								<Image source={require("../../../assets/close.png")} />
							</ButtonCloseReport>
						</ViewReport>
						: null 
					}
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
		right: 0,
	}
});
