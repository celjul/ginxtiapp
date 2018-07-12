import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import {
  DarkNeonGreen,
  FacebookBlue,
  GoogleRed,
  NeonGreen,
  TwitterBlue,
  White
} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  paginainternet: PropTypes.string,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  google: PropTypes.string,
};
export default class Exhibitor extends Component<Props> {
  _goTo(url){
    Linking.openURL(url);
  }

  _renderTwitter(){
    if(this.props.twitter == ""){
      return (<View></View>);
    } else {
      return (
        <TouchableOpacity onPress={this._goTo.bind(this, this.props.twitter)}>
          <Icon name="twitter" size={30} color={TwitterBlue}/>
        </TouchableOpacity>
      );
    }
  }

  _renderFacebook(){
    if(this.props.facebook == ""){
      return (<View></View>);
    } else {
      return (
        <TouchableOpacity onPress={this._goTo.bind(this, this.props.facebook)}>
          <Icon name="facebook" size={30} color={FacebookBlue}/>
        </TouchableOpacity>
      );
    }
  }

  _renderUrl(){
    if(this.props.paginainternet == ""){
      return (<View></View>);
    } else {
      return (
        <TouchableOpacity onPress={this._goTo.bind(this, this.props.paginainternet)}>
          <Icon name="link" size={30} color={NeonGreen}/>
        </TouchableOpacity>
      );
    }
  }

  _renderGoogle(){
    if(this.props.google == ""){
      return (<View></View>);
    } else {
      return (
        <TouchableOpacity onPress={this._goTo.bind(this, this.props.google)}>
          <Icon name="link" size={30} color={GoogleRed}/>
        </TouchableOpacity>
      );
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.picture}>
          <Image style={styles.logo} source={{uri: `data:image/png;base64,${this.props.logo}`}}/>
        </View>
        <View>
          <Text style={styles.sponsorName}>{this.props.nombre}</Text>
          <View style={styles.links}>
            {this._renderUrl()}
            {this._renderFacebook()}
            {this._renderTwitter()}
            {this._renderGoogle()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: DarkNeonGreen,
  },
  picture: {
    width: '30%',
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
    marginBottom: 20,
    marginLeft: 10,
  },
  links: {
    marginLeft: 20,
    width: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
