import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox, Divider } from 'react-native-elements';
import { infoStyles, editStyles } from './Styles';
import { styles } from '../Styles';

export const InformationComponent = props => {
  return (
    <View>
      <View style={[props.swiper]}>
        <Swiper style={infoStyles.swiper}>
          {props.open.map((obj, key) => {
            return (
              <View key={key}>
                <Text style={[styles.header, styles.innerText, styles.alignCenter]}>
                  {obj.title}
                </Text>
                { obj.open ?
                  <View style={[infoStyles.swiperChild]}>
                    <Text style={styles.header}>
                      Öppet:
                    </Text>
                    <Text>
                      {obj.start} - {obj.end}
                    </Text>
                  </View>
                  :
                  <Text style={[styles.header, styles.alignCenter]}> Closed </Text>
                }
                {obj.breakfast ?
                  <View style={[infoStyles.swiperChild]}>
                    <Text style={styles.header}>
                      Frukost:
                    </Text>
                    <Text>
                      {obj.startBreak} - {obj.endBreak}
                    </Text>
                  </View>
                  : null
                }
                {obj.breakfast ?
                  <View style={[infoStyles.swiperChild]}>
                    <Text style={styles.header}>
                      Lunch:
                    </Text>
                    <Text>
                      {obj.startLunch} - {obj.endLunch}
                    </Text>
                  </View>
                  : null
                }
              </View>
            );
          })}
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
                title={prop.open ? "Öppet " + prop.title : "Stänged " + prop.title}
                containerStyle={{ backgroundColor: prop.backgroundColor }}
                center
                style={{ backgroundColor: 'transparent' }}
                checked={prop.open}
                onPress={() => props.onPress(prop.id)}
              />
              <View style={prop.open ? styles.Display : styles.notDisplay}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent' }} onPress={() => props.onPressStart(prop.start)}>{prop.start}</Text>
                    <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
                    <Text style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => props.onPressEnd(prop.end)}>{prop.end}</Text>
                  </View>
                  <CheckBox
                    title={prop.breakfast ? "Frukosterbjudande" : "Lägg till frukosterbjudande"}
                    containerStyle={{ backgroundColor: prop.backgroundColor }}
                    center
                    style={{ backgroundColor: 'transparent' }}
                    checked={prop.breakfast}
                    onPress={() => props.onPressBreakfast(prop.id)}
                  />
                  <View style={prop.breakfast ? styles.Display : styles.notDisplay}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => console.log('ähej')}>{prop.startBreak}</Text>
                    <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
                    <Text style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent', }} onPress={() => console.log('ähej')}>{prop.endBreak}</Text>
                    </View>
                  </View>
                  <CheckBox
                    title={prop.lunch ? "Luncherbjudande" : "Lägg till luncherbjudande"}
                    center
                    containerStyle={{ backgroundColor: prop.backgroundColor }}
                    style={{ backgroundColor: 'transparent' }}
                    checked={prop.lunch}
                    onPress={() => props.onPressLunch(prop.id)}
                  />
                  <View style={prop.lunch ? styles.Display : styles.notDisplay}>
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
