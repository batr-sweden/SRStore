import React from 'react';
import { Alert, Text, View, Image } from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';
import { styles } from '../Styles';

export const LocationComponent = ({ ...props, info, gpsLocation, getLocation }) => {
  const askForLocation = () => {
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

  const geolocation = (storeLocation) => {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        {storeLocation.error ?
            <Text>Error: {storeLocation.error}</Text>
          :
            <View>
              <Text>Will be used when maps is ready</Text>
              <Text>Latitude: {storeLocation.latitude}</Text>
              <Text>Longitude: {storeLocation.longitude}</Text>
            </View>
        }
      </View>
    );
  };
  const button = (setLocationOnMap) => {
    return (
      <View style={props.edit}>
        <Button
          raised
          buttonStyle={{ backgroundColor: '#b3e5fc' }}
          icon={{ name: 'location', type: 'evilicon' }}
          title='Set Map Location'
          onPress={setLocationOnMap}
        />
      </View>
    );
  };

  return (
    <Card
      containerStyle={{
        margin: 0,
        marginTop: 15,
        borderWidth: 0
      }}
      wrapperStyle={{ paddingVertical: 0 }}
    >
      <Text style={[styles.innerText, styles.alignCenter, { fontSize: 18, paddingBottom: 10 }]}>
        Besök oss på
      </Text>
      {gpsLocation.geoLocation ? geolocation(gpsLocation) : button(askForLocation)}
      <Divider style={{ backgroundColor: '#E0E0E0', marginHorizontal: 10, marginVertical: 15 }} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'flex-start', flexDirection: 'column' }}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.innerText, styles.alignCenter]}>
                  {info.location.address}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.innerText, styles.alignCenter]}>
                  {info.location.city}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.innerText, styles.alignCenter]}>
                  tel: {info.phone}
                </Text>
              </View>
            </View>
            <Image
              style={{ borderRadius: 10, width: 50, height: 50 }}
              source={{ uri: info.logo }}
            />
          </View>
      </View>
    </Card>
  );
};
