import * as RNEP from '@estimote/react-native-proximity';

export function ProximityInitializer (){
  let standZone = new RNEP.ProximityZone(1, 'type');

  standZone.onEnterAction = context => {
    console.log(context);
  };

  RNEP.locationPermission.request().then(
    permission => {
      if(permission !== RNEP.locationPermission.DENIED) {
        const credentials = new RNEP.CloudCredentials(
          'demobeaconbst-7ha',
          '5f33a5a8672f2c674a36fc9aeea703c2'
        );

        const config = {
          notification: {
            title: 'Text',
            text: 'Notification',
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
