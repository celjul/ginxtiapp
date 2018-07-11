import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Moment from 'moment';
import 'moment/locale/es';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NeonGreen,
  DarkNeonGreen,
  White
} from '../styles';

type Props = {
  date: PropTypes.date.isRequired,
  items: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};
export default class AgendaDate extends Component<Props> {
  render(){
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.date}>
          {Moment(Number(this.props.date)).format('DD [de] MMMM [de] YYYY')}
        </Text>
        <Icon style={styles.arrow} name="caret-right" size={30} color={NeonGreen} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: DarkNeonGreen,
  },
  date: {
    color: White,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  arrow: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
});
