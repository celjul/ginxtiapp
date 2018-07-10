import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import {
  DarkNeonGreen,
  White
} from '../styles';

type Props = {
  id: PropTypes.number.isRequired,
  foto: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  puesto: PropTypes.string.isRequired,
  semblanza: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
export default class Speaker extends Component<Props> {
  render(){
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.picture}>
          <Image style={styles.logo} source={{uri: `data:image/png;base64,${this.props.foto}`}}/>
        </View>
        <View>
          <Text style={styles.sponsorName}>{this.props.nombre}</Text>
          <Text style={styles.description}>{this.props.puesto}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: DarkNeonGreen,
  },
  picture: {
    width: '20%',
    height: '100%',
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  sponsorName: {
    color: White,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  description: {
    width: '75%',
    color: White,
    fontSize: 14,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
