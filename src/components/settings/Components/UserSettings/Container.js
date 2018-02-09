import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { InformationComponent, CheckComponent, LocationComponent } from './Component';
import { styles } from './Styles';

class UserSettings extends Component {

  state = {
      gpsLocation: {
        geoLocation: false
      },
    };

  render() {
    const { info } = this.props;

    let innerArrow = 'arrow-down';

    const changeArrow = () => {
      console.log('clicked');
      //use redux to change arrow;
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          gpsLocation: {
            geoLocation: true,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          }

        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    }

    return (
      <ScrollView style={styles.cardStyle}>

        <View style={styles.viewStyle}>
          <ImageBackground
           style={styles.imgBackground}
           source={{ uri: info.backgroundImg }}
          >
            <Image
             style={styles.img}
             source={{ uri: info.logo }}
            />
          </ImageBackground>

          <View style={styles.messageContainer}>
            <Text style={styles.header}>
              {info.storeName}
            </Text>
            <Text>
              {info.storeDescription}
            </Text>
            <Icon
              name={innerArrow}
              type='evilicon'
              color='grey'
              size={30}
              containerStyle={styles.icon}
              onPress={() => changeArrow()}
            />

            <CheckComponent />

            <InformationComponent
              location={info.location}
              hours={info.opening}
              phone={info.phone}
            />

            <LocationComponent
              location={info.location}
              phone={info.phone}
              getLocation={() => getLocation()}
              gpsLocation={this.state.gpsLocation}
            />

          </View>

        </View>

      </ScrollView>
    );
  }
}


export default UserSettings;
