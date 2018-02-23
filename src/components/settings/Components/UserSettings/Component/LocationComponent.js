import React from 'react';
import { Alert, Text, View, Image } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { styles } from '../Styles';

export const LocationComponent = ({ ...props, gpsLocation, location, phone, getLocation }) => {
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
  };

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
        <View style={props.edit}>
        <Button
          raised
          buttonStyle={{ backgroundColor: '#b3e5fc' }}
          icon={{ name: 'location', type: 'evilicon' }}
          title='Set Map Location'
          onPress={showAlert}
        />
        </View>
      );
    }
  };

  return (
    <View>
      {gpsLocation.geoLocation ? Elements.geolocation(gpsLocation) : Elements.button(askForLocation)}

      <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
          <View style={{ flex: 1 }}>
          <Text style={[styles.header, styles.innerText, styles.alignCenter]}>
            Besök oss på
          </Text>
          <Divider style={{ backgroundColor: '#E0E0E0', marginLeft: 10, marginRight: 10 }} />
          <View style={{ flex: 1, padding: 10, alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start', flexDirection: 'column' }}>
          <View style={{ flex: 1 }}>
          <Text style={[styles.innerText, styles.alignCenter]}>
            {location.address}
          </Text>
          </View>
          <View style={{ flex: 1 }}>
          <Text style={[styles.innerText, styles.alignCenter]}>
            {location.city}
          </Text>
          </View>
          <View style={{ flex: 1 }}>
          <Text style={[styles.innerText, styles.alignCenter]}>
            tel: {phone}
          </Text>
          </View>
          </View>
          <Image
           style={{ borderRadius: 10, width: 50, height: 50 }}
           source={{ uri: props.logo }}
          />
          </View>
        </View>

      </View>
    </View>
  );
};
