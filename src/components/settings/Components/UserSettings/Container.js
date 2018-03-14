import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from '../../../common';
import {
  InformationComponent,
  SocialComponent,
  AboutComponent,
  LocationComponent,
  ImageComponent } from './Component';
import { styles } from './Styles';

class UserSettings extends Component {

  state = {
      open: [{
        id: 1,
        open: false,
        backgroundColor: '#b9e7ec',  //Remove
        title: 'Vardagar',  // Weekdays
        start: '03:00',
        end: '16:00',
        startBreak: '03:00',
        endBreak: '16:00',
        breakfast: false,
        startLunch: '03:00',
        endLunch: '16:00',
        lunch: false,
      },
      {
        id: 2,
        open: true,
        backgroundColor: '#449faa', //Remove
        title: 'Helgen', // weekends
        start: '09:00',
        end: '18:00',
        startBreak: '08:00',
        endBreak: '16:00',
        breakfast: true,
        startLunch: '08:00',
        endLunch: '16:00',
        lunch: false,
      },
      {
        id: 3,
        open: true,
        backgroundColor: '#90ced6',  //Remove
        title: 'Röd-dagar', // Sundays
        start: '02:00',
        end: '16:00',
        startBreak: '02:00',
        endBreak: '16:00',
        breakfast: false,
        startLunch: '02:00',
        endLunch: '16:00',
        lunch: false,
      }],  // Open

      display: true,
      socialicon: [{
        id: 1, //app backend
        title: 'Lägg till Facebook',  //app backend
        type: 'facebook', //app backend
        checked: false, //app backend
      },
       {
        id: 2, //app backend
        title: 'Lägg till Instagram',  //app backend
        type: 'instagram', //app backend
        checked: false, //app backend
      }],
      gpsLocation: {
        geoLocation: false
      },
      endDateTimePickerVisible: false,
      startDateTimePickerVisible: false,
    };

  _editInformation = () => {
      this.setState({ display: false });
      if (!this.state.display) {
        this.setState({ display: true });
      }
    };

    _selectedIcon = (id) => {
      const newState = this.state.socialicon.map(obj => {
        if (obj.id === id) {
          return Object.assign({}, obj, { checked: !obj.checked });
        }
        return obj;
      });

      this.setState({ socialicon: newState });
    };
    _selectedDay = (id) => {
      const newState = this.state.open.map(obj => {
        if (obj.id === id) {
          return Object.assign({}, obj, { open: !obj.open });
        }
        return obj;
      });

      this.setState({ open: newState });
    };
    _selectedBreakfast = (idBreakfast) => {
      const newState = this.state.open.map(obj => {
        if (obj.id === idBreakfast) {
          return Object.assign({}, obj, { breakfast: !obj.breakfast });
        }
        return obj;
      });

      this.setState({ open: newState });
    };

    _selectedLunch = (idLunch) => {
      const newState = this.state.open.map(obj => {
        if (obj.id === idLunch) {
          return Object.assign({}, obj, { lunch: !obj.lunch });
        }
        return obj;
      });

      this.setState({ open: newState });
    };

    showStartDateTimePicker = (start) => {
      console.log(start);
      this.setState({ startDateTimePickerVisible: true });
    }

    showEndDateTimePicker = (end) => {
      console.log(end);
      this.setState({ endDateTimePickerVisible: true });
    }

    hideStartDateTimePicker = () => this.setState({ startDateTimePickerVisible: false });

    hideEndDateTimePicker = () => this.setState({ endDateTimePickerVisible: false });

    handleStartDatePicked = (start) => {
      const newState = this.state.open.map(obj => {
        if (obj.start === start) {
          return Object.assign({}, obj, { start });
        }
        return obj;
      });

      this.setState({ open: newState });
      console.log(start);
      this.hideStartDateTimePicker();
    };

  handleEndDatePicked = (end) => {
    console.log('A date has been picked: ', end);
    this.hideEndDateTimePicker();
  };

  updateSize = () => {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { info } = this.props;

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
  };

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignSelf: 'flex-end', top: 50, position: 'absolute', zIndex: 1 }}>
          <Icon
          raised
          name='edit'
          type='font-awesome'
          color='#2d6a71'
          onPress={() => this._editInformation()}
          />
        </View>
        <View style={styles.viewStyle}>
          <ImageComponent
            onChangeText={(DescText) => this.setState({ DescText })}
            backgroundImg={info.backgroundImg}
            storeName={info.storeName}
            storeDescription={info.storeDescription}
            logo={info.logo}
            hide={this.state.display ? styles.Display : styles.notDisplay}
            edit={this.state.display ? styles.notDisplay : styles.display}
          />
          <InformationComponent
            open={this.state.open}
            onPressEnd={(end) => this.showEndDateTimePicker(end)}
            onPressStart={(start) => this.showStartDateTimePicker(start)}
            hours={info.opening}
            title={this}
            location={info.location}
            phone={info.phone}
            startVisible={this.state.startDateTimePickerVisible}
            startConfirm={this.handleStartDatePicked}
            startCancel={(start) => this.hideStartDateTimePicker(start)}
            endVisible={this.state.endDateTimePickerVisible}
            endConfirm={this.handleEndDatePicked}
            endCancel={this.hideEndDateTimePicker}
            onPressLunch={(idLunch) => this._selectedLunch(idLunch)}
            onPressBreakfast={(idBreakfast) => this._selectedBreakfast(idBreakfast)}
            onPress={(id) => this._selectedDay(id)}
            swiper={this.state.display ? styles.display : styles.notDisplay}
            edit={this.state.display ? styles.notDisplay : styles.display}
          />
          <AboutComponent
            onChangeText={(text) => this.setState({ text })}
            value={info.text}
            hide={this.state.display ? styles.Display : styles.notDisplay}
            edit={this.state.display ? styles.notDisplay : styles.display}
            storeName={info.storeName}
          />
          <View style={this.state.display ? styles.iconStyle : styles.iconStyleEdit}>
            <SocialComponent
              socialicon={this.state.socialicon}
              checked={this.state.checked}
              onPress={(id) => this._selectedIcon(id)}
              edit={this.state.display ? styles.notDisplay : styles.display}
            />
          </View>
          <View style={{ flex: 1 }}>
            <LocationComponent
              location={info.location}
              phone={info.phone}
              getLocation={() => getLocation()}
              gpsLocation={this.state.gpsLocation}
              logo={info.logo}
              edit={this.state.display ? styles.notDisplay : styles.display}
            />
          </View>
            <Button
              buttonContainerStyle={
                [styles.saveButtonStyle, this.state.display ? styles.notDisplay : styles.display]}
              text='Spara ändringarna'
              onPress={() => this.setState({ display: true })}
            />
        </View>
      </ScrollView>
    );
  }
}


export default UserSettings;
