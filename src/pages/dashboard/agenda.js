import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import Moment from 'moment';
import AgendaDate from '../../components/agenda_date';
import { PrimaryColor, NeonGreen, White } from '../../styles';
import { fetchApi } from '../../api';

type Props = {
  navigation: PropTypes.object.isRequired,
};
export default class Agenda extends Component<Props> {
  state = {
    loading: true,
    agenda: [],
  }

  async componentDidMount(){
    try {
      let sponsors = [];
      let response = await fetchApi('/RESTgetAgendaCompleta');

      if(response && response.agenda){
        sponsors = this._groupByDate(response.agenda);
      }

      this.setState({
        sponsors,
        loading: false
      });
    } catch (exception) {
      this.setState({ loading: false});
    }
  }

  _groupByDate(data){
    let days = {};

    data.forEach((element) => {
      let date = Moment(element.horainicio);
      let key = `${date.startOf('day').valueOf()}`;

      if (!days[key]) { days[key] = []; }

      days[key].push(element);
    });

    let elements = Object.keys(days).map((key) => {
      return {
        date: key,
        events: days[key]
      };
    });

    return elements;
  }

  render(){
    if (this.state.loading) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner
            style={styles.spinner}
            isVisible={this.state.loading}
            size={Dimensions.get('window').width / 4}
            type={'ChasingDots'}
            color={NeonGreen}/>
        </View>
      );
    } else {
      return (
        <FlatList
          style={styles.flatlist}
          data={this.state.sponsors}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) =>
            <AgendaDate
              date={item.date}
              key={item.date}
              onPress={() =>
                this.props.navigation.navigate('Events', {
                  events: item.events,
                  date: item.date,
                })
              }/>
          }/>
      );
    }
  }
}

const styles =  StyleSheet.create({
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
  flatlist: {
    backgroundColor: PrimaryColor,
  },
});
