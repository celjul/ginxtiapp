import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropdownAlert from 'react-native-dropdownalert';
import OneSignal from 'react-native-onesignal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createSwitchNavigator } from 'react-navigation';
import DashboardIndex from './pages/dashboard/index';
import Loading from './components/loading';
import { NeonGreen, PrimaryColor, White } from './styles';
import { fetchApi } from './api';

type Props = {
  navigation: PropTypes.object.isRequired,
};
class App extends Component<Props> {
  state = {
    loading: true,
    email: '',
    password: '',
  }

  async componentDidMount(){
    OneSignal.init('a974405d-f9fc-471a-8619-bcf14f837e58');
    OneSignal.addEventListener('ids', this.setDeviceId);
    OneSignal.configure();
    let user = await AsyncStorage.getItem('USER_ID');
    if(user && user !== null && user !== undefined){
      this.props.navigation.navigate('Index');
    } else {
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.setDeviceId);
  }

  async setDeviceId(device){
    await AsyncStorage.setItem('ONESIGNAL_PLAYER_ID', device.userId);
  }

  async onSubmitLogin(){
    this.setState({ loading: true });
    try {
      let form = new FormData();
      form.append('email', this.state.email);
      form.append('codigo', this.state.password);
      let response = await fetchApi(
        '/RESTloginapp',
        form,
        'post'
      );
      console.log(response);
      if(response && response.Usuario){
        await AsyncStorage.setItem('USER_ID', `${response.Usuario.id}`);
      }
      this.props.navigation.navigate('Index');
    } catch (exception) {
      console.log(exception);
      this.setState({ loading: false });
      if(exception.message === 'Unauthenticated'){
        this.dropdown.alertWithType('error', 'Error', 'Usuario y/o código incorrecto');
      } else {
        this.dropdown.alertWithType('error', 'Error', 'Ocurrio un error, intente mas tarde');
      }
    }
  }

  render() {
    if (this.state.loading) {
      return (<Loading loading={this.state.loading}/>);
    } else {
      return (
        <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.centeredImageContainer}>
            <Image style={styles.centeredImage} source={require('./assets/logo.png')}/>
            <Image source={require('./assets/separator.png')}/>
          </View>
          <View style={styles.loginForm}>
            <View style={styles.inputContainer}>
              <Icon style={styles.icon} name="envelope" size={30} color="#FFF" />
              <TextInput style={styles.input}
                onChangeText={(text) => this.setState({ email: text })}
                placeholder="Usuario"
                keyboardType="default"
                value={this.state.email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon style={styles.icon} name="lock" size={30} color="#FFF" />
              <TextInput style={styles.input}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry={true}
                placeholder="Código"
                value={this.state.password}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onSubmitLogin.bind(this)}>
              <Text style={styles.buttonText}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
          <DropdownAlert ref={ref => this.dropdown = ref} />
        </KeyboardAwareScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'stretch',
    backgroundColor: PrimaryColor,
  },
  scrollViewContainer: {
    flex: 1,
  },
  centeredImageContainer: {
    flex: 3,
    marginBottom: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredImage: {
    width: '80%',
    height: 100,
    resizeMode: 'contain',
  },
  loginForm: {
    flex: 2,
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 30,
  },
  input: {
    width: '80%',
    backgroundColor: White,
    borderRadius: 5,
  },
  icon: {
    width: 50,
    height: 50,
    paddingTop: 7,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    marginTop: 20,
    backgroundColor: NeonGreen,
    paddingVertical: 9,
    borderRadius: 9,
  },
  buttonText: {
    textAlign: 'center',
    color: White,
    textTransform: 'uppercase',
  },
});

export default createSwitchNavigator({
  Login: App,
  Index: DashboardIndex,
});
