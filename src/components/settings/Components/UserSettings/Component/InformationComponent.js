import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox, Divider } from 'react-native-elements';
import { infoStyles, editStyles } from './Styles';
import { styles } from '../Styles';

export const InformationComponent = ({ ...props, hours }) => {
  const weekdays = hours.weekdays.opening;
  const weekends = hours.weekends.opening;
  const redDays = hours.redDays.opening;

  const Elements = {
    open: (open, start, end) => {
      if (open) {
        return (
          <View style={[infoStyles.swiperChild]}>
            <Text style={styles.header}>
              Öppet:
            </Text>
            <Text>
              {start} - {end}
            </Text>
          </View>
        );
      }
      return (
      <Text style={[styles.header, styles.alignCenter]}> Closed </Text>
    );
  },
    breakfast: (breakfast, start, end) => {
      if (breakfast) {
        return (
          <View style={[infoStyles.swiperChild]}>
            <Text style={styles.header}>
              Frukost:
            </Text>
            <Text>
              {start} - {end}
            </Text>
          </View>
        );
      }
      return;
    },
    lunch: (lunch, start, end) => {
      if (lunch) {
        return (
          <View style={[infoStyles.swiperChild]}>
            <Text style={styles.header}>
              Lunch:
            </Text>
            <Text>
              {start} - {end}
            </Text>
          </View>
        );
      }
      return;
    }
  };


  return (
    <View>
    <View style={[props.swiper]}>
      <Swiper style={infoStyles.swiper}>
        <View>
          <Text style={[styles.header, styles.innerText, styles.alignCenter]}>
            Vardagar
          </Text>

          {
            Elements.open(weekdays.open, weekdays.openTime.start, weekdays.openTime.end)
          }

          {
            Elements.breakfast(weekdays.offers, weekdays.offersType.breakfast.start, weekdays.offersType.breakfast.end)
          }
          {
            Elements.lunch(weekdays.offers, weekdays.offersType.lunch.start, weekdays.offersType.lunch.end)
          }
        </View>

        <View>
          <Text style={[styles.header, styles.innerText, styles.alignCenter]}>
            Lördag:
          </Text>

          {
            Elements.open(weekends.open, weekends.openTime.start, weekends.openTime.end)
          }

          {
            Elements.breakfast(weekends.offers, weekends.offersType.breakfast.start, weekends.offersType.breakfast.end)
          }
          {
            Elements.lunch(weekends.offers, weekends.offersType.lunch.start, weekends.offersType.lunch.end)
          }
        </View>

        <View>
          <Text style={[styles.header, styles.innerText, styles.alignCenter]}>
            Söndag:
          </Text>

          {
            Elements.open(redDays.open, redDays.openTime.start, redDays.openTime.end)
          }

          {
            Elements.breakfast(redDays.offers, redDays.offersType.breakfast.start, redDays.offersType.breakfast.end)
          }
          {
            Elements.lunch(redDays.offers, redDays.offersType.lunch.start, redDays.offersType.lunch.end)
          }
        </View>

      </Swiper>
      </View>
      {props.open.map((prop, key) => {
        return (
          <View key={key} style={props.edit}>
          <View style={{ flex: 1 }}>
            <DateTimePicker
              isVisible={props.startVisible}
              onConfirm={props.startConfirm}
              onCancel={() => props.startCancel(prop.start)}
              mode='time'

            />
            <DateTimePicker
              isVisible={props.endVisible}
              onConfirm={props.endConfirm}
              onCancel={() => props.endCancel(prop.end)}
              mode='time'
            />
          </View>
          <View>
          <CheckBox
            title={prop.checked ? prop.isOpen + prop.title : prop.isClose + prop.title}
            containerStyle={{ backgroundColor: prop.backgroundColor }}
            center
            style={{ backgroundColor: 'transparent' }}
            checked={prop.checked}
            onPress={() => props.onPress(prop.id)}
          />
          <View style={prop.checked ? styles.Display : styles.notDisplay}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent' }} onPress={() => props.onPressStart(prop.start)}>{prop.start}</Text>
          <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
          <Text style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => props.onPressEnd(prop.end)}>{prop.end}</Text>
          </View>
              <CheckBox
                title={prop.titleBreakfast}
                containerStyle={{ backgroundColor: prop.backgroundColor }}
                center
                style={{ backgroundColor: 'transparent' }}
                checked={prop.checkedBreakfast}
                onPress={() => props.onPressOffer(prop.idBreakfast)}
              />
              <View style={prop.checkedBreakfast ? styles.Display : styles.notDisplay}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => console.log('ähej')}>{prop.startBreak}</Text>
              <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
              <Text style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => console.log('ähej')}>{prop.endBreak}</Text>
              </View>
              </View>
              <CheckBox
                title={prop.titleLunch}
                center
                containerStyle={{ backgroundColor: prop.backgroundColor }}
                style={{ backgroundColor: 'transparent' }}
                checked={prop.checkedLunch}
                onPress={() => props.onPressLunch(prop.idLunch)}
              />
              <View style={prop.checkedLunch ? styles.Display : styles.notDisplay}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => console.log('ähej')}>{prop.startLunch}</Text>
              <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
              <Text style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => console.log('ähej')}>{prop.endLunch}</Text>
              </View>
              </View>
          </View>
          </View>
        </View>
      );
      })}
      </View>
  );
};
