import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { Button } from '../../../common';
import {
  InformationComponent,
  SocialComponent,
  LocationComponent,
  ImageComponent } from './Component';
import { styles } from './Styles';

class UserSettings extends Component {

  componentWillMount() {
    this.updateIndex();
  }

  timeArray = []

  updateIndex = () => {
      const hour = 24;
      const min = 30;
      // Push to timeArray
      for (let x = 0; x < hour + 1; x++) {
        for (let y = 0; y < 60; y += min) {
          if (x === hour && y > 0) {
            break;
          } else {
            if (y < 10 && x < 10) {
              this.timeArray.push(('0' + x.toString()) + ':' + ('0' +y.toString()))
            } else if (y < 10) {
              this.timeArray.push(x + ':' + ('0'+y.toString()))
            } else if (x < 10) {
              this.timeArray.push(('0'+x.toString()) + ':' + y)
            } else {
              this.timeArray.push(x + ':' + y)
            }
          }
        }
      }
  }

  render() {
    const {
      data,
      info,
      dateModal,
      toggleOpen,
      toggleDateModal,
      time,
      updateOpenHour,
      updateForm,
      updateGpsLocation,
      gpsLocation,
      updateSocialIcon,
      toggleForm
    } = this.props;

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          updateGpsLocation({
            geoLocation: true,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    };


    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.viewStyle}>
          <ImageComponent
            onChangeText={(DescText) => this.setState({ DescText })}
            backgroundImg={info.backgroundImg}
            storeName={info.storeName}
            storeDescription={info.storeDescription}
            logo={info.logo}
            updateForm={updateForm}
            toggleForm={toggleForm}
          />
          <InformationComponent
            timeArray={this.timeArray}
            title={this}
            location={info.location}
            phone={info.phone}
            storeName={info.storeName}
            modalVisible={dateModal}
            toggleDateModal={toggleDateModal}
            time={time}
            data={data}
            updateStoreInfo={this.props.updateStoreInfo}
            updateForm={updateForm}
            updateOpenHour={updateOpenHour}
            toggleOpen={toggleOpen}
            toggleForm={toggleForm}
          />
            <SocialComponent
              socialicon={data.socialicon}
              updateSocialIcon={updateSocialIcon}
              updateForm={updateForm.social_icon}
              toggleForm={toggleForm}
            />
            <LocationComponent
              info={info}
              getLocation={() => getLocation()}
              gpsLocation={gpsLocation}
            />
          <Button
            buttonContainerStyle={
              [styles.saveButtonStyle, updateForm ? styles.display : styles.notDisplay]}
            text='Spara ändringarna'
            onPress={() => console.log('trying to save')}
          />
        </View>
      </ScrollView>
    );
  }
}


export default UserSettings;
