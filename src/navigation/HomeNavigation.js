import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import News from '../screens/News';

export default class HomeNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          
            

            <Image
              source={require('../../assets/logo.jpg')}
              style={styles.uni}
            />

            <View>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  this.props.navigation.navigate('PlanetScreen');
                }}>
                <Image
                  source={require('../../assets/A-3/Exo.png')}
                  style={styles.exo}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  this.props.navigation.navigate('ISS');
                }}>
                <Image
                  source={require('../../assets/A-2/iss_icon.png')}
                  style={styles.iss}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button3}
                onPress={() => {
                  this.props.navigation.navigate('Meteor');
                }}>
                <Image
                  source={require('../../assets/A-2/meteor_icon.png')}
                  style={styles.meteor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button4}
                onPress={() => {
                  this.props.navigation.navigate('Settings');
                }}>
                <Image
                  source={require('../../assets/settings.png')}
                  style={styles.settings}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: '#322BB3',
                borderBottomWidth: 2,
                top: 90,
              }}
            />
          <News />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000235',

    // alignItems: 'center',
    //justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  view: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 0.1,
    resizeMode: 'cover',
    // width:1100
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  droidSafeArea: {
   // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iss: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    
    backgroundColor: 'white',
    borderRadius: 40,
  },

  meteor: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    
    backgroundColor: 'white',
    borderRadius: 40,
  },
  exo: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
        backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
  },
  uni: {
    position: 'absolute',
    height: 150,
    width: 250,
    resizeMode: 'contain',
    right: 5,
    left: 25,
    top: -35,
    
    alignItems: 'center',
  },
  settings: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
        backgroundColor: 'white',
    borderRadius: 40,
  },

  button1: {
    top: 80,
    left: 60,
    right: 5,
    height: 40,
  },

  button2: {
    marginTop: -35,
    right: 5,
    left: 120,
    top: 75,
    height: 35,
  },
  button3: {
    marginTop: -35,
    right: 5,
    left: 180,
    top: 75,
    height: 40,
  },
  button4: {
    marginTop: -35,
    right: 5,
    left: 240,
    top: 70,
    height: 40,
  },
});
