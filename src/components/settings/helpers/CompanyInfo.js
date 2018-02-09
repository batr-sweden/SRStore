import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RaisedTextButton } from 'react-native-material-buttons';
import { TextField } from 'react-native-material-textfield';
import { CardSection } from '../../common';
import { authStyles } from '../../auth/styles';
import { secondaryColor } from '../../../config';

const CompanyInfo = ({ info }) => {
  return (
    <ScrollView style={authStyles.sectionStyle}>

      <CardSection style={authStyles.infoDiv.container}>
        <Text style={authStyles.infoDiv.message}>
          Your Information
        </Text>
      </CardSection>

      <View style={styles.viewStyle}>
        <TextField
          label="Contact Full Name"
          value={info.contactName}
          lineWidth={1.5}
        />

        <TextField
          disabled
          label="Store Name"
          lineWidth={1.5}
          value={info.storeName}
        />

        <TextField
          disabled
          keyboardType='phone-pad'
          label="Phone Number"
          lineWidth={1.5}
          value={info.phone}
        />

        <TextField
          multiline
          numberOfLines={2}
          label="Store Info"
          lineWidth={1.5}
          value={info.storeDescription}
        />
      </View>

      <CardSection style={authStyles.infoDiv.container}>
        <Text style={authStyles.infoDiv.message}>
          Log In Information
        </Text>
      </CardSection>

      <View style={styles.viewStyle}>
        <TextField
          disabled
          lineWidth={1.5}
          keyboardType='email-address'
          label="email@provider.com"
          value={info.email}
        />

        <TextField
          secureTextEntry
          enablesReturnKeyAutomatically
          returnKeyType='next'
          label="Old Password"
          lineWidth={1.5}
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
        />

        <TextField
          secureTextEntry
          enablesReturnKeyAutomatically
          returnKeyType='next'
          label="Password"
          lineWidth={1.5}
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
        />

        <TextField
          secureTextEntry
          enablesReturnKeyAutomatically
          returnKeyType='go'
          label="Re type password"
          lineWidth={1.5}
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>

      <RaisedTextButton
        style={{ margin: 10 }}
        title="Update"
        color={secondaryColor}
        titleColor='white'
      />

    </ScrollView>
  );
};

const styles = {
  viewStyle: {
    marginRight: 10,
    marginLeft: 10,
    paddingBottom: 2
  }
};

export default CompanyInfo;
