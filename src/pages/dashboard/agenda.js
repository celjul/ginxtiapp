import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import Moment from 'moment';
import { PrimaryColor, NeonGreen, White } from '../../styles';
import { fetchApi } from '../../api';

type Props = {};
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
        debugger;
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



    return days;
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
      return (<View></View>);
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
});
