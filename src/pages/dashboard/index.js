import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import Moment from 'moment';
import 'moment/locale/es';
import Onboarding from 'react-native-onboarding-swiper';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { DarkPrimaryColor, NeonGreen, PrimaryColor } from '../../styles';
import SocialView from './social';
import NotificationsView from './notifications';
import NotificationView from './notification';
import AgendaView from './agenda';
import EventsView from './events';
import SponsorsView from './sponsors';
import ExhibitorsView from './exhibitors';
import SpeakersView from './speakers';
import SpeakerView from './speaker';
import Loading from '../../components/loading';
import { ProximityInitializer } from '../../util/proximity';

type Props = {
  navigation: PropTypes.object.isRequired,
};
class DashboardIndex extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerStyle: {
        backgroundColor: PrimaryColor,
      },
      headerRight: (
        <View>
          <Icon
            name="logout"
            type="material-community"
            size={25}
            onPress={() => params.handleLogout()}
            containerStyle={styles.hamburger}
            color={NeonGreen} />
        </View>
      ),
      headerLeft: (
        <View>
          <Icon
            name="help-circle"
            type="feather"
            size={25}
            onPress={() => params.handleOnboarding()}
            containerStyle={styles.hamburger}
            color={NeonGreen} />
        </View>
      ),
    };
  }

  state = {
    loading: true,
    onboarding: 'false',
  }

  async _handleLogout(){
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  _handleOnboarding(){
    this.setState({ onboarding: undefined });
  }

  async componentDidMount(){
    this.props.navigation.setParams({
      handleLogout: this._handleLogout.bind(this),
      handleOnboarding: this._handleOnboarding.bind(this),
    });
    let onboarding = await AsyncStorage.getItem('ONBOARDING');

    this.setState({ onboarding, loading: false }, () => {
      if(this.state.onboarding === 'true') {
        ProximityInitializer();
      }
    });
  }

  onOnboardingDone(){
    this.setState({ onboarding: 'true', loading: false }, async () => {
      ProximityInitializer();
      await AsyncStorage.setItem('ONBOARDING', 'true');
    });
  }

  render(){
    if (this.state.loading) {
      return (<Loading loading={this.state.loading}/>);
    } else if (this.state.onboarding !== 'true') {
      return (
        <Onboarding
          onSkip={this.onOnboardingDone.bind(this)}
          onDone={this.onOnboardingDone.bind(this)}
          skipLabel={"Saltar"}
          nextLabel={"Siguiente"}
          pages={[{
            backgroundColor: PrimaryColor,
            imageContainerStyles: styles.onboardingImage,
            image: <Image style={styles.centeredImageOnboarding} source={require('../../assets/logo.png')}/>,
            title: 'Bienvenido a la app oficial del 6to Congreso Nacional GINgroup.',
            subtitle: 'Ahora tu teléfono móvil es la entrada al evento.'
          }, {
            backgroundColor: PrimaryColor,
            imageContainerStyles: styles.onboardingImage,
            image: <Image style={styles.centeredImageOnboarding} source={require('../../assets/logo.png')}/>,
            title: 'Aquí encontrarás toda la información que necesitas para vivir la experiencia de la Innovacción como:',
            subtitle: 'Expositores\nAgenda\nGalería\nRedes Sociales\n¡Y mucho más!'
          }, {
            backgroundColor: PrimaryColor,
            imageContainerStyles: styles.onboardingImage,
            image: <Image style={styles.centeredImageOnboarding} source={require('../../assets/logo.png')}/>,
            title: '¡Bienvenido a Innovacción: Ideas en acción, 6to Congreso Nacional GINgroup|GINxti!',
            subtitle: 'Recuerda activar el bluetooth de tu teléfono cuando llegues al evento y otorga el permiso a la app de enviarte notificaciones.'
          }, {
            backgroundColor: PrimaryColor,
            imageContainerStyles: styles.onboardingImage,
            image: <Image style={styles.centeredImageOnboarding} source={require('../../assets/logo.png')}/>,
            title: '¡Bienvenido a Innovacción: Ideas en acción, 6to Congreso Nacional GINgroup|GINxti!',
            subtitle: 'Para la mejor experiencia en el evento te pedimos permisos de ubicación y recibiras información detallada'
          }]}/>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.centeredImageContainer}>
            <Image style={styles.centeredImage} source={require('../../assets/logo.png')}/>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => this.props.navigation.navigate('Agenda')}>
              <Image style={styles.imageIcon} source={require('../../assets/agenda.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => this.props.navigation.navigate('Speakers')}>
              <Image style={styles.imageIcon} source={require('../../assets/speakers.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => this.props.navigation.navigate('Exhibitors')}>
              <Image style={styles.imageIcon} source={require('../../assets/exhibitors.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => this.props.navigation.navigate('Social')}>
              <Image style={styles.imageIcon} source={require('../../assets/socialmedia.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => this.props.navigation.navigate('Sponsors')}>
              <Image style={styles.imageIcon} source={require('../../assets/sponsors.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => this.props.navigation.navigate('Notifications')}>
              <Image style={styles.imageIcon} source={require('../../assets/notifications.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredImageContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredImage: {
    marginHorizontal: 30,
    resizeMode: 'contain',
    width: '80%',
  },
  centeredImageOnboarding: {
    marginHorizontal: 30,
    resizeMode: 'contain',
    maxWidth: '80%',
    height: 70,
  },
  onboardingImage: {
    // paddingBottom: 10,
    marginTop: -300,
  },
  buttons: {
    flex: 1,
    backgroundColor: PrimaryColor,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  iconButton: {
    flex: 0.5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DarkPrimaryColor,
    borderWidth: 2,
  },
  imageIcon: {
    height: '60%',
    resizeMode: 'contain',
  },
  hamburger: {
    margin: 10,
  },
});

export default createStackNavigator({
  Navigation: {
    screen: DashboardIndex,
  },
  Social: {
    screen: SocialView,
    navigationOptions: {
      headerTitle: 'Social Media',
    },
  },
  Agenda: {
    screen: AgendaView,
    navigationOptions: {
      headerTitle: 'Agenda',
    },
  },
  Events: {
    screen: EventsView,
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state;

      return {
        headerTitle: Moment(Number(params.date)).format('DD [de] MMMM [de] YYYY'),
      };
    },
  },
  Sponsors: {
    screen: SponsorsView,
    navigationOptions: {
      headerTitle: 'Patrocinadores',
    },
  },
  Exhibitors: {
    screen: ExhibitorsView,
    navigationOptions: {
      headerTitle: 'Expositores',
    },
  },
  Notifications: {
    screen: NotificationsView,
    navigationOptions: {
      headerTitle: 'Notificaciones',
    },
  },
  Notification: {
    screen: NotificationView,
    navigationOptions: {
      headerTitle: '',
    },
  },
  Speakers: {
    screen: SpeakersView,
    navigationOptions: {
      headerTitle: 'Ponentes',
    },
  },
  Speaker: {
    screen: SpeakerView,
    navigationOptions: {
      headerTitle: 'Ponente',
    },
  },
});
