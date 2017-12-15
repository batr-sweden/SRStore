//Import libraries for Component
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { boxShadow } from '../../styles';
// Create component
const RewardButton = ({
  onPress,
  text,
  categoryText,
  componentParentStyle }) => {
  const { categoryTextStyle, parentStyle, categoryStyle, nameStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1, padding: 10 }}>
      <View style={[parentStyle, boxShadow, componentParentStyle]}>
        <View style={{ height: 30, flexDirection: 'row' }}>
            <View style={categoryStyle}>
              <Text style={categoryTextStyle}>
                {categoryText}
              </Text>
          </View>
        </View>
              <View style={nameStyle}>
                <Text style={{ color: '#fff', fontSize: 22 }}>
                  {text}
                  </Text>
                </View>
              </View>
          </TouchableOpacity>
  );
};

const styles = {
  categoryTextStyle: {
    fontSize: 15,
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginLeft: 5,
    color: '#fff'
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
  }
};

export { RewardButton };
