import * as RNEP from '@estimote/react-native-proximity';

export function ProximityInitializer (){
  let standZone = new RNEP.ProximityZone(1, 'ginxti-n1d');

  standZone.onEnterAction = context => {
    console.log(context);
  };
  standZone.onExitAction = context => { console.log(context); };
  standZone.onChangeAction = context => { console.log(context); };

  RNEP.locationPermission.request().then(
    permission => {
      if(permission !== RNEP.locationPermission.DENIED) {
        const credentials = new RNEP.CloudCredentials(
          'ginxti-n1d',
          '7016110294e4a828896276177cc13c3a'
        );

        const config = {};

        RNEP.proximityObserver.initialize(credentials, config);
        RNEP.proximityObserver.startObservingZones([standZone]);
      }
    },
    error => {
      console.log(error);
    }
  );
}
