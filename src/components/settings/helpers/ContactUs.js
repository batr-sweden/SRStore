import React from 'react';
import { Text, View } from 'react-native';
import { RaisedTextButton } from 'react-native-material-buttons';
import { TextField } from 'react-native-material-textfield';
import { Card, CardSection } from '../../common';
import { authStyles } from '../../auth/styles';
import { secondaryColor } from '../../../config';

const ContactUs = ({ info }) => {
  return (
    <Card style={[styles.cardStyle, authStyles.sectionStyle]}>

      <CardSection style={authStyles.infoDiv.container}>
        <Text style={authStyles.infoDiv.message}>
          Contact Us
        </Text>
      </CardSection>

      <View style={styles.viewStyle}>
        <TextField
          label="Contact Person **Full Name**"
          lineWidth={2}
        />

        <TextField
          disabled
          label="Store Name"
          value={info.storeName}
        />

        <TextField
          disabled
          label="Phone Number"
          value={info.phone}
        />

        <TextField
          disabled
          label="email@provider.com"
          value={info.email}
        />

        <TextField
          multiline
          numberOfLines={4}
          label="Message"
          lineWidth={2}
        />

        <RaisedTextButton
          title="Send"
          color={secondaryColor}
          titleColor="white"
        />
      </View>

    </Card>
  );
};

const styles = {
  btnStle: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  cardStyle: {
    flex: 1
  },
  messageBox: {
    height: 80
  },
  viewStyle: {
    marginRight: 10, marginLeft: 10
  }
};

export default ContactUs;
