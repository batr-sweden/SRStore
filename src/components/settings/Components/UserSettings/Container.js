import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

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
      info,
      dateModal,
      toggleOpen,
      toggleDateModal,
      time,
      updateOpenHour,
      updateForm,
      updateGpsLocation,
      updateSocialIcon,
      toggleForm,
      actionUpdate,
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
        (error) => updateGpsLocation({ error }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    };


    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.viewStyle}>
          <ImageComponent
            data={info}
            updateForm={updateForm}
            toggleForm={toggleForm}
          />
          <InformationComponent
            timeArray={this.timeArray}
            title={this}
            modalVisible={dateModal}
            toggleDateModal={toggleDateModal}
            time={time}
            data={info}
            updateStoreInfo={this.props.updateStoreInfo}
            updateForm={updateForm}
            updateOpenHour={updateOpenHour}
            toggleOpen={toggleOpen}
            toggleForm={toggleForm}
          />
            <SocialComponent
              socialicon={info.socialicon}
              updateSocialIcon={updateSocialIcon}
              updateForm={updateForm}
              toggleForm={toggleForm}
            />
            <LocationComponent
              data={info}
              getLocation={() => getLocation()}
            />
          <Button
            buttonContainerStyle={{ display: 'flex', marginBottom: 25, marginHorizontal: 15 }}
            text='Spara ändringarna'
            onPress={() => actionUpdate(info)}
          />
        </View>
      </ScrollView>
    );
  }
}


export default UserSettings;
