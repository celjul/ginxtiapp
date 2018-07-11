import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import 'moment/locale/es';
import {
  NeonGreen,
  DarkNeonGreen,
  White
} from '../styles';

type Props = {
  id: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  horafin: PropTypes.number.isRequired,
  horafinString: PropTypes.string.isRequired,
  horainicio: PropTypes.number.isRequired,
  horainicioString: PropTypes.string.isRequired,
};
export default class AgendaDate extends Component<Props> {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.dates}>
          <Text style={styles.date}>{this.props.horainicioString}</Text>
          <Text style={styles.date}>{this.props.horafinString}</Text>
        </View>
        <Text style={styles.event}>
          {this.props.titulo}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: DarkNeonGreen,
    flexDirection: 'row',
  },
  dates: {
    flex: 1
  },
  date: {
    flex: 0.5,
    textAlign: 'center',
    fontSize: 14,
    color: White,
  },
  event: {
    flex: 4,
    color: White,
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
