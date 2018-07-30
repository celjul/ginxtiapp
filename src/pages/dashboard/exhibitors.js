import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Exhibitor from '../../components/exhibitor';
import Loading from '../../components/loading';
import { PrimaryColor } from '../../styles';
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
      return (<Loading loading={this.state.loading}/>);
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
  flatlist: {
    backgroundColor: PrimaryColor,
  },
});
