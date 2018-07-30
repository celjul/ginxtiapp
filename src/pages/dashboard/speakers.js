import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import Speaker from '../../components/speaker';
import Loading from '../../components/loading';
import { PrimaryColor } from '../../styles';
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
      return (<Loading loading={this.state.loading}/>);
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
  flatlist: {
    backgroundColor: PrimaryColor,
  },
});
