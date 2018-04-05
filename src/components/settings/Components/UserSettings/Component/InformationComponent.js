import React from 'react';
import { Modal, Picker, Text, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { TextButton } from 'react-native-material-buttons';
import { Card, CheckBox, Icon } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { infoStyles } from './Styles';
import { styles } from '../Styles';

export const InformationComponent = ({ ...props }) => {
  return (
    <View>
      <Card containerStyle={{ margin: 10 }}>

      {
        props.updateForm.open_hours ?
        setOpenHour(props) : showOpenHours(props)
      }

      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Icon color='#517fa4' type='evilicon' name='pencil' size={32} />
      </TouchableOpacity>
    </Card>

    <Card containerStyle={{ margin: 10 }}>
      <TextField
        multiline
        label='About Store'
        style={{ padding: 10, borderColor: 'red' }}
        editable={props.updateForm.about_store}
        value={props.data.message}
        onChangeText={(text) => props.updateStoreInfo(text)}
      />
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Icon color='#517fa4' type='evilicon' name='pencil' size={32} />
      </TouchableOpacity>
    </Card>

      <Modal
        animationType="slide"
        transparent
        visible={props.modalVisible}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 300,
              paddingBottom: 20,
              backgroundColor: '#FFFFFF'
            }}
          >
            <View style={{ flex: 1 }}>
              <TextButton
                style={{ margin: 4, marginLeft: 0 }}
                titleColor='#00796B'
                title='Cancel'
                onPress={() => props.toggleDateModal()}
              />
              <Text style={{ textAlign: 'center', paddingTop: 10 }}>Open</Text>
              <Picker
                selectedValue={props.time ? props.time.start : '00:00'}
                onValueChange={(itemValue) => props.updateOpenHour('start', itemValue)}
              >
                {props.timeArray.map((prop, key) => {
                  return (
                    <Picker.Item key={key} label={prop} value={prop} />
                  );
                })}
              </Picker>
            </View>
            <View style={{ flex: 1 }}>
              <TextButton
                style={{ margin: 4 }}
                titleColor='#00695C'
                color='rgba(0, 0, 0, .05)'
                title='Update'
              />
              <Text style={{ textAlign: 'center', paddingTop: 10 }}>Close</Text>
              <Picker
                selectedValue={props.time ? props.time.end : '00:00'}
                onValueChange={(itemValue) => props.updateOpenHour('end', itemValue)}
              >
                {props.timeArray.map((prop, key) => {
                  return (
                    <Picker.Item key={key} label={prop} value={prop} />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const showOpenHours = (props) =>
  <Swiper style={infoStyles.swiper}>
    {props.data.open.map((obj, key) => {
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
  </Swiper>;

  const setOpenHour = (props) =>
    <View>
      {props.data.open.map((prop, key) => {
        return (
          <View key={key} style={props.edit}>
            <View>
              <CheckBox
                title={prop.open ? "Öppet " + prop.title : "Stängd " + prop.title}
                containerStyle={{ backgroundColor: prop.backgroundColor }}
                center
                style={{ backgroundColor: 'transparent' }}
                checked={prop.open}
                onPress={() => props.toggleOpen(prop.id, 'open')}
              />
              <View style={prop.open ? styles.Display : styles.notDisplay}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                      style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent' }}
                      onPress={() => props.toggleDateModal(prop.title, prop.start, prop.end, '')}
                    >{prop.start}</Text>
                    <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
                    <Text
                      style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent' }}
                      onPress={() => props.toggleDateModal(prop.title, prop.start, prop.end, '')}
                    >{prop.end}</Text>
                  </View>
                  <CheckBox
                    title={prop.breakfast ? "Frukosterbjudande" : "Lägg till frukosterbjudande"}
                    containerStyle={{ backgroundColor: prop.backgroundColor }}
                    center
                    style={{ backgroundColor: 'transparent' }}
                    checked={prop.breakfast}
                    onPress={() => props.toggleOpen(prop.id, 'breakfast')}
                  />
                  <View style={prop.breakfast ? styles.Display : styles.notDisplay}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text
                        style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent' }}
                        onPress={() => props.toggleDateModal(prop.title, prop.startBreak, prop.endBreak, 'Break')}
                      >{prop.startBreak}</Text>
                      <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
                      <Text
                        style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent', }}
                        onPress={() => props.toggleDateModal(prop.title, prop.startBreak, prop.endBreak, 'Break')}
                      >{prop.endBreak}</Text>
                    </View>
                  </View>
                  <CheckBox
                    title={prop.lunch ? "Luncherbjudande" : "Lägg till luncherbjudande"}
                    center
                    containerStyle={{ backgroundColor: prop.backgroundColor }}
                    style={{ backgroundColor: 'transparent' }}
                    checked={prop.lunch}
                    onPress={() => props.toggleOpen(prop.id, 'lunch')}
                  />
                  <View style={prop.lunch ? styles.Display : styles.notDisplay}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text
                        style={{ marginLeft: 40, fontSize: 25, backgroundColor: 'transparent' }}
                        onPress={() => props.toggleDateModal(prop.title, prop.startLunch, prop.endLunch, 'Lunch')}
                      >{prop.startLunch}</Text>
                      <Text style={{ fontSize: 25, backgroundColor: 'transparent', }}>-</Text>
                      <Text
                        style={{ marginRight: 40, fontSize: 25, backgroundColor: 'transparent' }}
                        onPress={() => props.toggleDateModal(prop.title, prop.startLunch, prop.endLunch, 'Lunch')}
                      >{prop.endLunch}</Text>
                    </View>
                  </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
