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
        isOpen: 'Öppet',
        isClose: 'Stängt',
        id: 1,
        open: false,
        checked: false,
        backgroundColor: '#449faa',
        title: ' helger',
        start: '09:00',
        end: '18:00',
        toto: [{
          test: 12,
        }],
        titleBreakfast: 'Erbjuder ni frukost?',
        startBreak: '08:00',
        endBreak: '16:00',
        checkedBreakfast: false,
        idBreakfast: 1,
        titleLunch: 'Erbjuder ni lunch?',
        startLunch: '08:00',
        endLunch: '16:00',
        checkedLunch: false,
        idLunch: 1,
      },
      {
        id: 2,
        isOpen: 'Öppet',
        isClose: 'Stängt',
        open: false,
        backgroundColor: '#90ced6',
        checked: false,
        title: ' söndag',
        start: '02:00',
        end: '16:00',
        titleBreakfast: 'Erbjuder ni frukost?',
        startBreak: '02:00',
        endBreak: '16:00',
        checkedBreakfast: false,
        idBreakfast: 2,
        titleLunch: 'Erbjuder ni lunch?',
        startLunch: '02:00',
        endLunch: '16:00',
        checkedLunch: false,
        idLunch: 2,
      },
      {
        id: 3,
        isOpen: 'Öppet',
        isClose: 'Stängt',
        open: false,
        checked: false,
        backgroundColor: '#b9e7ec',
        title: ' vardagar',
        start: '03:00',
        end: '16:00',
        titleBreakfast: 'Erbjuder ni frukost',
        startBreak: '03:00',
        endBreak: '16:00',
        checkedBreakfast: false,
        idBreakfast: 3,
        titleLunch: 'Erbjuder ni lunch?',
        startLunch: '03:00',
        endLunch: '16:00',
        checkedLunch: false,
        idLunch: 3,
      }],
      DescText: 'Store offers great coffee and free wifi, free bread on fridays',
      text: 'Heyday – A combined coffee bar and concept store with a lively atmosphere which stocks tasty bites and festive accessories. We showcase a modern take on every day details with a fresh twist and a pop of color for those who wish to add some love style to their lives.\
      Det är ett sätt att beskriva Heyday. Men för oss är Heyday mycket mer än så. Det är en dröm om att våga gå sin väg, tro på sin idé och vara modig nog att genomföra den. Vi heter Kajsa och Charlotta. Välkommen till oss!',
      display: true,
      checked: false,
      socialicon: [{
        id: 1,
        title: 'Lägg till Facebook',
        type: 'facebook',
        checked: false,
      },
       {
        id: 2,
        title: 'Lägg till Instagram',
        type: 'instagram',
        checked: false,
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
      // const isSelectedUser = this.state.selectedItem === id;
      //  console.log(`Rendered item - ${id} for ${isSelectedUser}`);
    };
    _selectedDay = (id) => {
      const newState = this.state.open.map(obj => {
        if (obj.id === id) {
          return Object.assign({}, obj, { checked: !obj.checked });
        }
        return obj;
      });

      this.setState({ open: newState });
      // const isSelectedUser = this.state.selectedItem === id;
      //  console.log(`Rendered item - ${id} for ${isSelectedUser}`);
    };
    _selectedBreakfast = (idBreakfast) => {
      // const breakfast = this.state.open[1].breakfast;
      console.log(idBreakfast);
      // console.log(this.state.open[1]);
      const newState = this.state.open.map(obj => {
        if (obj.idBreakfast === idBreakfast) {
          return Object.assign({}, obj, { checkedBreakfast: !obj.checkedBreakfast });
        }
        return obj;
      });

      this.setState({ open: newState });
    };

    _selectedLunch = (idLunch) => {
      // const breakfast = this.state.open[1].breakfast;
      console.log(idLunch);
      // console.log(this.state.open[1]);
      const newState = this.state.open.map(obj => {
        if (obj.idLunch === idLunch) {
          return Object.assign({}, obj, { checkedLunch: !obj.checkedLunch });
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
      // const isSelectedUser = this.state.selectedItem === id;
      //  console.log(`Rendered item - ${id} for ${isSelectedUser}`);
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
            value={this.state.DescText}
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
            onPressOffer={(idBreakfast) => this._selectedBreakfast(idBreakfast)}
            onPress={(id) => this._selectedDay(id)}
            swiper={this.state.display ? styles.display : styles.notDisplay}
            edit={this.state.display ? styles.notDisplay : styles.display}
          />
          <AboutComponent
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
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
