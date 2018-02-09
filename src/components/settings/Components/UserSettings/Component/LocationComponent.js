import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../Styles';

export const LocationComponent = ({ gpsLocation, location, phone, getLocation }) => {

  const askForLocation = () => {
    console.log(gpsLocation);
    Alert.alert(
      'Store Location',
      'To determin exact location of your store ' +
      'We advice you to be there before running location service.',
      [
        { text: 'Not At STore', style: 'cancel' },
        { text: 'At Store', onPress: getLocation },
      ],
      { cancelable: true }
    );
  }

  const Elements = {
    geolocation: (storeLocation) => {
      return (
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Will be used when maps is ready</Text>
          <Text>Latitude: {storeLocation.latitude}</Text>
          <Text>Longitude: {storeLocation.longitude}</Text>
          {storeLocation.error ? <Text>Error: {storeLocation.error}</Text> : null}
        </View>
      );
    },
    button: (showAlert) => {
      return (
        <Button
          raised
          buttonStyle={{ backgroundColor: '#b3e5fc' }}
          icon={{ name: 'location', type: 'evilicon' }}
          title='Set Map Location'
          onPress={showAlert}
        />
      );
    }
  }

  return (
    <View>
      {gpsLocation.geoLocation ? Elements.geolocation(gpsLocation) : Elements.button(askForLocation)}

      <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 15 }}>
        <View style={{ flex: 3, paddingLeft: 5 }}>
          <Text style={[styles.header, styles.innerText, styles.alignCenter]}>
            Location
          </Text>
          <Text style={[styles.innerText, styles.alignCenter]}>
            {location.address} {"\n"}
            {location.city}
          </Text>
          <Text style={[styles.innerText, styles.alignCenter]}>
            tel: {phone}
          </Text>
        </View>
      </View>
    </View>
  )

}
