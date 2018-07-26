import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { PrimaryColor, White } from '../../styles';

type Props = {
  navigation: PropTypes.object.isRequired,
};
export default class Notification extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      notification: this.props.navigation.getParam('notification'),
    };
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.name}>{this.state.notification.titulo}</Text>
        <Text style={styles.description}>{this.state.notification.descripcion}</Text>
      </ScrollView>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  name: {
    color: White,
    marginBottom: 20,
    fontSize: 26,
    textAlign: 'center',
  },
  description: {
    color: White,
    fontSize: 16,
    textAlign: 'justify',
  },
});
