import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import Speaker from '../../components/speaker';
import { PrimaryColor, NeonGreen, White } from '../../styles';
import { fetchApi } from '../../api';

type Props = {
  navigation: PropTypes.object.isRequired,
};
export default class Sponsors extends Component<Props> {
  state = {
    loading: true,
    speakers: [],
  }

  async componentDidMount(){
    try {
      let speakers = [];
      let response = await fetchApi('/RESTgetListaponentes');

      if(response && response.ponentes){
        speakers = response.ponentes;
      }

      this.setState({
        speakers,
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
          data={this.state.speakers}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) =>
            <Speaker
              {...item}
              key={item.id}
              onPress={() => this.props.navigation.navigate('Speaker', { speaker: item })}/>
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
