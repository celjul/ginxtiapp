import * as RNEP from '@estimote/react-native-proximity';
import { fetchApi } from '../api';
import { AsyncStorage } from 'react-native';

export function ProximityInitializer (){
  let standZone = new RNEP.ProximityZone(1, 'ginxti-n1d');

  standZone.onEnterAction = async (context) => {
    let playerId = await AsyncStorage.getItem('ONESIGNAL_PLAYER_ID');
    let userId = await AsyncStorage.getItem('USER_ID');
    context.attachments = Object.assign(context.attachments, {
      "idDispositivo": playerId,
      "idUsuario": userId
    });
    console.log(context);
    await fetchApi(
      '/RESTtriggerBeacon',
      context,
      'post',
      {
        'Content-type': 'application/json',
      }
    );
  };
  standZone.onExitAction = () => { };
  standZone.onChangeAction = () => { };

  RNEP.locationPermission.request().then(
    permission => {
      if(permission !== RNEP.locationPermission.DENIED) {
        const credentials = new RNEP.CloudCredentials(
          'ginxti-n1d',
          '7016110294e4a828896276177cc13c3a'
        );

        const config = {
          notification: {
            title: "Exploration mode is on",
            text: "We'll notify you when you're next to something interesting."
          },
        };

        RNEP.proximityObserver.initialize(credentials, config);
        RNEP.proximityObserver.startObservingZones([standZone]);
      }
    },
    error => {
      console.log(error);
    }
  );
}
