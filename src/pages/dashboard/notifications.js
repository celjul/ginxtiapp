import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryColor, White } from '../../styles';

type Props = {};
export default class Content extends Component<Props> {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.alert}>Zona en construcción</Text>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColor,
  },
  alert: {
    color: White,
    fontSize: 30,
  },
});
