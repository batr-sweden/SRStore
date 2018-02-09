import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { infoStyles } from './Styles';
import { styles } from '../Styles';

export const InformationComponent = ({ hours }) => {
  const weekdays = hours.weekdays.opening;
  const weekends = hours.weekends.opening;
  const redDays = hours.redDays.opening;

  return (
    <View>
      <Swiper style={infoStyles.swiper}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.header, styles.innerText, styles.alignCenter]}>
            weekdays
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
  );
};

const Elements = {
  open: (open, start, end) => {
    if (open) {
      return (
        <View style={infoStyles.swiperChild}>
          <Text style={styles.header}>
            Open:
          </Text>
          <Text>
            {start} - {end}
          </Text>
        </View>
      );
    }
    return <Text style={[styles.header, styles.alignCenter]}> Closed </Text>;
  },
  breakfast: (breakfast, start, end) => {
    if (breakfast) {
      return (
        <View style={infoStyles.swiperChild}>
          <Text style={styles.header}>
            Breakfast:
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
        <View style={infoStyles.swiperChild}>
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
