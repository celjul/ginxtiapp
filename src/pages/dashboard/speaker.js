import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryColor, White } from '../../styles';

type Props = {
  navigation: PropTypes.object.isRequired,
};
export default class Speaker extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      speaker: this.props.navigation.getParam('speaker'),
    };
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: `data:image/png;base64,${this.state.speaker.foto}`}}/>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.name}>{this.state.speaker.nombre}</Text>
          <Text style={styles.post}>{this.state.speaker.puesto}</Text>
          <Text style={styles.description}>{this.state.speaker.semblanza}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
  },
  imageContainer: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    flex: 1,
  },
  image: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  descriptionContainer: {
    flex: 3,
    padding: 20,
  },
  name: {
    color: White,
    marginBottom: 20,
    fontSize: 26,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  post: {
    color: White,
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    color: White,
    fontSize: 14,
    textAlign: 'justify',
  },
});
