import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Sponsor from '../../components/sponsor';
import Loading from '../../components/loading';
import { PrimaryColor } from '../../styles';
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
      return (<Loading loading={this.state.loading}/>);
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
  flatlist: {
    backgroundColor: PrimaryColor,
  },
});
