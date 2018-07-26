import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Spinner from 'react-native-spinkit';
import { DarkNeonGreen, NeonGreen, PrimaryColor, White } from '../../styles';
import { fetchApi } from '../../api';

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
