import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FacebookBlue,
  PrimaryColor,
  TwitterBlue,
} from '../../styles';

type Props = {};
export default class Social extends Component<Props> {
  _goTo(url){
    Linking.openURL(url);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Icon.Button
            name="facebook"
            size={70}
            onPress={this._goTo.bind(this, 'https://www.facebook.com/GINxti/')}
            backgroundColor={FacebookBlue}
            style={styles.socialButton}
            iconStyle={styles.socialButtonIcon}>
          </Icon.Button>
        </View>
        <View style={styles.buttonContainer}>
          <Icon.Button
            name="twitter"
            size={70}
            onPress={this._goTo.bind(this, 'https://twitter.com/GINxti')}
            backgroundColor={TwitterBlue}
            style={styles.socialButton}
            iconStyle={styles.socialButtonIcon}>
          </Icon.Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
  },
  buttonContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonIcon: {
    margin: 5,
  },
  socialButton: {
    padding: 10,
    height: 150,
    width: 150,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
