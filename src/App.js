import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NeonGreen, PrimaryColor, White } from './styles';

type Props = {};
export default class App extends Component<Props> {
  state = {
    email: '',
    password: '',
  }

  onSubmitLogin(){
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.centeredImageContainer}>
          <Image source={require('./assets/logo.png')}/>
          <Image source={require('./assets/separator.png')}/>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.inputContainer}>
            <Icon style={styles.icon} name="envelope" size={30} color="#FFF" />
            <TextInput style={styles.input}
              onChangeText={(text) => this.setState({ email: text })}
              placeholder="usuario"
              keyboardType="default"
              value={this.state.email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon style={styles.icon} name="lock" size={30} color="#FFF" />
            <TextInput style={styles.input}
              onChangeText={(text) => this.setState({ password: text })}
              secureTextEntry={true}
              placeholder="***********"
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
      </ScrollView>
    );
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
    flex: 2,
    marginBottom: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
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
