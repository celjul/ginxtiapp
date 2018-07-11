import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import Event from '../../components/event';
import { PrimaryColor } from '../../styles';

type Props = {
  navigation: PropTypes.object.isRequired,
};
export default class Events extends Component<Props> {
  constructor(props){
    super(props);
    const { params } = props.navigation.state;

    this.state = {
      events: params.events,
    };
  }

  render(){
    return (
      <FlatList
        style={styles.flatlist}
        data={this.state.events}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Event {...item} key={item.id}/>}/>
    );
  }
}

const styles =  StyleSheet.create({
  flatlist: {
    backgroundColor: PrimaryColor,
  },
});
