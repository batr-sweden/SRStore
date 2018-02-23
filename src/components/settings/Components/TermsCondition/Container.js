import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { terms } from './termObj';

const TermsCondition = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>
        {terms.heading}
      </Text>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<Text style={styles.subHeader}>
					{terms.subHeading}
				</Text>
				<Text style={styles.body}>
					{terms.body}
				</Text>
				<Text style={styles.subHeader}>
					{terms.prohibited.header}
				</Text>
				<Text style={styles.body}>
					{terms.prohibited.body.a}
				</Text>
				<Text style={styles.body}>
					{terms.prohibited.body.b}
				</Text>
				<Text style={styles.body}>
					{terms.prohibited.body.c}
				</Text>
			</ScrollView>
    </View>
  );
};


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
	body: {
		lineHeight: 20,
		paddingBottom: 10
	},
	contentContainer: {
    padding: 5,
    marginBottom: 10
  },
  mainHeader: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    color: 'steelblue',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 10
  },
	subHeader: {
    color: 'steelblue',
    fontSize: 16,
    fontWeight: '600',
		alignSelf: 'center',
		paddingBottom: 10
  },
};

export default TermsCondition;
