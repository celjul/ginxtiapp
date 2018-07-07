import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import { PrimaryColor } from '../../styles';

type Props = {};
export default class DashboardIndex extends Component<Props> {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centeredImageContainer}>
          <Image source={require('../../assets/logo.png')}/>
        </View>
        <View style={styles.buttons}>
          <View style={styles.iconButton}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredImageContainer: {
    flex: 1,
    marginBottom: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 3,
    backgroundColor: PrimaryColor,
  },
  iconButton: {
    width: '50%',
  },
});
