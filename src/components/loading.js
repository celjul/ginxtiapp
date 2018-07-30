import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import Spinner from 'react-native-spinkit';
import { PrimaryColor, NeonGreen, White } from '../styles';

export default class Loading extends Component {
  render(){
    return (
      <View style={styles.spinnerContainer}>
        <Spinner
          style={styles.spinner}
          isVisible={this.props.loading}
          size={Dimensions.get('window').width / 4}
          type={'ChasingDots'}
          color={NeonGreen} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: 'center',
    borderColor: White,
    borderWidth: 0,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderColor: White,
    backgroundColor: PrimaryColor,
    borderWidth: 0,
    padding: 50,
  },
});
