import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DarkPrimaryColor, PrimaryColor, NeonGreen } from '../../styles';

type Props = {};
export default class DashboardIndex extends Component<Props> {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centeredImageContainer}>
          <Image source={require('../../assets/logo.png')}/>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="calendar" size={70} color={NeonGreen}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="user" size={70} color={NeonGreen} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="list-alt" size={70} color={NeonGreen}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="thumbs-up" size={70} color={NeonGreen} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="users" size={70} color={NeonGreen}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
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
