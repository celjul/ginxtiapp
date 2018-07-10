import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import Sponsor from '../../components/sponsor';
import { PrimaryColor, NeonGreen, White } from '../../styles';
import { fetchApi } from '../../api';

type Props = {};
export default class Sponsors extends Component<Props> {
  state = {
    loading: true,
    sponsors: [],
  }

  async componentDidMount(){
    try {
      let sponsors = [];
      let response = await fetchApi('/RESTgetListasponsors');

      if(response && response.sponsors){
        sponsors = response.sponsors;
      }

      this.setState({
        sponsors,
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
          data={this.state.sponsors}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => <Sponsor {...item} key={item.id}/>}/>
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
