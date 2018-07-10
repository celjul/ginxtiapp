import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import Exhibitor from '../../components/exhibitor';
import { PrimaryColor, NeonGreen, White } from '../../styles';
import { fetchApi } from '../../api';

type Props = {};
export default class Exhibitors extends Component<Props> {
  state = {
    loading: true,
    exhibitors: [],
  }

  async componentDidMount(){
    try {
      let exhibitors = [];
      let response = await fetchApi('/RESTgetlistaexpositores');

      if(response && response.expositores){
        exhibitors = response.expositores;
      }

      this.setState({
        exhibitors,
        loading: false
      });
    } catch (exception) {
      this.setState({ loading: false});
    }
  }

  _keyExtractor = (item) => `${item.id}`;

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
          data={this.state.exhibitors}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => <Exhibitor {...item} key={item.id}/>}/>
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
