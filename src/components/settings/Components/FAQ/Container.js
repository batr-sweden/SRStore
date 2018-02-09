import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card } from '../../../common';

const FAQ = ({ faq }) => {
  return (
    <View>
      <Text style={styles.mainHeader}>
        FAQ
      </Text>

      <FlatList
        data={faq}
        renderItem={_renderBtn}
        keyExtractor={item => item.uid}
      />
    </View>
  );
};

const _renderBtn = ({ item }) => {
  return (
    <Card style={styles.cardStyle}>
      <Text style={styles.header}>
        {item.question}
      </Text>
      <Text style={styles.answer}>
        {item.answer}
      </Text>
    </Card>
  );
};

const styles = {
  answer: {
    paddingTop: 10,
    color: 'gray'
  },
  cardStyle: {
    backgroundColor: 'snow',
    borderWidth: 0,
    borderLeftWidth: 4,
    borderColor: 'orange',
    borderRadius: 0,
    padding: 10,
    marginBottom: 10
  },
  header: {
    color: 'steelblue',
    fontSize: 16,
    fontWeight: '500'
  },
  mainHeader: {
    alignSelf: 'center',
    color: 'steelblue',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 10
  }
};

export default FAQ;
