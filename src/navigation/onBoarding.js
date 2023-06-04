import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, Input, Image, withTheme } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={{ width: 250, height: 100 }}
          />
          <View style={styles.info}>
            <Text style={styles.text}>
              Welcome to cosmox app. Here you can explore the wonders of the
              solar system.We welcome you with open arms.Enjoy our app.
            </Text>
            <Text style={styles.text}>
              Swipe through the pages and you will see continue button to go on
              the main app.Go ahead
            </Text>
          </View>
        </View>
        <View style={styles.slide2}>
          <Image
            source={require('../../assets/A-2/iss_icon.png')}
            style={{ width: 250, height: 250 }}
          />
          <View style={styles.info2}>
            <Text style={styles.text}>ISS:International space station</Text>
            <Text style={styles.text}>
              This is the International space station.The International Space
              Station is the largest modular space station in low Earth orbit.
              The project involves five space agencies: the United States' NASA,
              Russia's Roscosmos, Japan's JAXA, Europe's ESA, and Canada's CSA
            </Text>
            <Text style={styles.text}>
              There may be bugs in this screen refered to this build.But dont
              worry we will fix it in the future build or replace the screen
              with another concept.
            </Text>
          </View>
        </View>
        <View style={styles.slide3}>
          <Image
            source={require('../../assets/A-2/meteor_icon.png')}
            style={{ width: 250, height: 250 }}
          />
          <View style={styles.info3}>
            <Text style={styles.text}>
              This screen maps the enire galaxy to check for meteors.
            </Text>
            <Text style={styles.text}>
              A meteor is a streak of light in the sky caused by a meteoroid
              crashing through Earth's atmosphere. Meteoroids are lumps of rock
              or iron that orbit the sun. Most meteoroids are small fragments of
              rock created by asteroid collisions. Comets also create meteoroids
              as they orbit the sun and shed dust and debris.
            </Text>
          </View>
        </View>
        <View style={styles.slide4}>
          <Image
            source={require('../../assets/enjoy-.png')}
            style={{ width: 200, height: 200 }}
          />
          <View style={styles.info4}>
            <Text style={styles.text}>
              This is all about this app. We hope you enjoy this app.And there
              is one more thing you need to know the app is powered by centricon
              Operating system.We will realease feature updates and performance
              updates simultaniously.
            </Text>
            <Text style={styles.text}>
              If you agree to our terms and condition,Click on cotinue button below
            </Text>

            <TouchableOpacity
              style={styles.soft}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={styles.T}>continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000235',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393a7c',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0bc96',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD580',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  soft: {
    //flex:1,
    marginTop: 30,
    marginLeft: -1,
    backgroundColor: '#322BB3',
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },
  T: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

    //alignItems: 'center',
    //justifyContent: 'center',
  },
  info: {
    flex: 0.32,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    borderTopRadius: 30,
    padding: 30,
  },
  info2: {
    flex: 0.74,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    borderTopRadius: 30,
    padding: 10,
  },
  info3: {
    flex: 0.59,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    borderTopRadius: 30,
    padding: 10,
  },
  info4: {
    flex: 0.63,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    padding: 10,
  },
});
