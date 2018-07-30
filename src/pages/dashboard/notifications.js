import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { DarkNeonGreen, PrimaryColor, White } from '../../styles';
import { fetchApi } from '../../api';
import Loading from '../../components/loading';

type Props = {
  navigation: PropTypes.object.isRequired,
};
export default class Content extends Component<Props> {
  state = {
    loading: true,
    notifications: [],
  }

  async componentDidMount(){
    try {
      let notifications = [];
      let response = await fetchApi('/RESTgetNotificaciones');

      if(response && response.notificaciones){
        notifications = response.notificaciones;
      }

      this.setState({ notifications, loading: false });
    } catch(exception){
      this.setState({ loading: false });
    }
  }

  render(){
    if (this.state.loading) {
      return (<Loading loading={this.state.loading}/>);
    } else {
      return (
        <FlatList
          style={styles.flatlist}
          data={this.state.notifications}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) =>
            <TouchableOpacity
              key={item.id}
              onPress={() => this.props.navigation.navigate('Notification', { notification: item })}
              style={styles.notificationItem}>
              <Text style={styles.itemTitle}>{item.titulo}</Text>
            </TouchableOpacity>
          }/>
      );
    }
  }
}

const styles =  StyleSheet.create({
  flatlist: {
    backgroundColor: PrimaryColor,
  },
  notificationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: DarkNeonGreen,
    width: '100%',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: White,
  },
});
