import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DarkPrimaryColor, PrimaryColor, NeonGreen } from '../../styles';
import SocialView from './social';
import ContentView from './content';

type Props = {
  navigation: PropTypes.object.isRequired,
};
class DashboardIndex extends Component<Props> {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centeredImageContainer}>
          <Image source={require('../../assets/logo.png')}/>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.props.navigation.navigate('Content')}>
            <Icon name="calendar" size={70} color={NeonGreen}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.props.navigation.navigate('Content')}>
            <Icon name="user" size={70} color={NeonGreen} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.props.navigation.navigate('Content')}>
            <Icon name="list-alt" size={70} color={NeonGreen}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.props.navigation.navigate('Social')}>
            <Icon name="thumbs-up" size={70} color={NeonGreen} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.props.navigation.navigate('Content')}>
            <Icon name="users" size={70} color={NeonGreen}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.props.navigation.navigate('Content')}>
            <Icon name="volume-up" size={70} color={NeonGreen} />
          </TouchableOpacity>
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
    flex: 1,
    backgroundColor: PrimaryColor,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  iconButton: {
    flex: 0.5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DarkPrimaryColor,
    borderWidth: 2,
  },
});

export default createStackNavigator({
  Navigation: {
    screen: DashboardIndex,
    navigationOptions: {
      header: null,
    },
  },
  Social: {
    screen: SocialView,
    navigationOptions: {
      headerTitle: 'Social Media',
    },
  },
  Content: ContentView,
});
