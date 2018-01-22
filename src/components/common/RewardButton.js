//Import libraries for Component
import React from 'react';
import Swipeout from 'react-native-swipeout';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { boxShadow } from '../../styles';

// Create component
const RewardButton = (props) => {
  const swipeSettings = {
    autoClose: true,
    right: [
      {
        onPress: props.onPressMore,
        text: 'Mer',
        type: 'default',
        component:
        (
          <View style={{ flex: 1, }}>
          <View style={{ justifyContent: 'center', flex: 2, alignItems: 'center' }}>
          <Icon
            name='ios-more-outline'
            type='ionicon'
            color={'#FFF'}
            size={50}
          />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>
              Mer
            </Text>
          </View>
          </View>
        )
      },
      {
        onPress: props.onPressEdit,
        text: 'Ändra',
        type: 'primary',
        component:
        (
          <View style={{ flex: 1, }}>
          <View style={{ justifyContent: 'center', flex: 2, alignItems: 'center' }}>
          <Icon
            name='pencil'
            type='evilicon'
            color={'#FFF'}
            size={50}
          />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>
              Ändra
            </Text>
          </View>
          </View>
        )
      },
      {
        onPress: props.onPressDelete,
        text: 'Släng',
        type: 'delete',
        component:
        (
          <View style={{ flex: 1, }}>
          <View style={{ justifyContent: 'center', flex: 2, alignItems: 'center' }}>
          <Icon
            name='trash'
            type='evilicon'
            color={'#FFF'}
            size={50}
          />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>
              Delete
            </Text>
          </View>
          </View>
        )
      }
    ],
  };

  return (
    <View style={styles.parentContainerStyle}>
      <View style={[styles.parentStyle, boxShadow, props.parentStyle]}>
        <Swipeout
        {...swipeSettings}
        style={styles.swipeStyle}
        >
          <TouchableOpacity onPress={props.onPressButton}>
            <View style={styles.categoryContainerStyle}>
              <View style={styles.categoryStyle}>
              <Text style={styles.categoryTextStyle}>
              {props.categoryText}
              </Text>
              </View>
            </View>
            <View style={styles.nameStyle}>
              <Text style={styles.nameTextStyle}>
                {props.text}
              </Text>
            </View>
          </TouchableOpacity>
        </Swipeout>
        <View style={[styles.expandViewStyle, props.expandViewStyle]}>
          <View style={styles.infoContainer}>
            <View style={styles.textInfoContainer}>
              <Text style={styles.textInfoStyle}>
                {props.infoText}
              </Text>
            </View>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  parentContainerStyle: {
    flex: 1, padding: 10
  },
  swipeStyle: {
    backgroundColor: 'transparent', borderRadius: 15
  },
  expandViewStyle: {
    backgroundColor: '#eeeeee',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 5,

  },
  categoryTextStyle: {
    fontSize: 15,
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginLeft: 5,
    color: '#fff'
  },
  categoryContainerStyle: {
    height: 30, flexDirection: 'row'
  },
  parentStyle: {
    backgroundColor: '#F6F7F9',
    borderWidth: 0,
    borderRadius: 15,
  },
  categoryStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    paddingLeft: 5
  },
  nameStyle: {
    height: 55,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  nameTextStyle: {
    color: '#fff', fontSize: 22
  },
  infoContainer: {
    padding: 5, minHeight: 40
  },
  textInfoContainer: {
    flex: 1
  },
  textInfoStyle: {
    color: '#424242'
  },
  buttonAlign: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1, marginRight: 5
  },
  editButton: {
    backgroundColor: '#EA9632'
  },
  deleteButton: {
    backgroundColor: '#ae453d'
  }
};

export { RewardButton };
