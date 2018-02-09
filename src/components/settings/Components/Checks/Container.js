import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Icon } from 'react-native-elements';
import { Card } from '../../../common';

const Checks = () => {
  const checks = {
    check1: `
      value: 100,
      created: 'dec 25, 2017',
      type: 'promotional',
      expire: true,
      expireDate: 'jan 15, 2018'
    `,
    check2: {
      value: 50,
      created: 'dec 25, 2017',
      type: 'reward',
      expire: false
    }
  };

  const ListedBox = ({ backgroundColor, text }) => {
    return (
      <Card style={[backgroundColor, listBox.eachBox]}>
        <Icon
          name='ios-cash-outline'
          type='ionicon'
          color='#fff'
          size={50}
          containerStyle={listBox.iconStyle}
        />
        <Text style={listBox.textStyle}>
          {text}
        </Text>
      </Card>
    );
  };

  const { rewards, container, mainHeader, listBox } = styles;
  return (
    <View style={container}>
      <View style={listBox.mainBox}>
        <ListedBox
         backgroundColor={listBox.advertCheck}
         text='Advert Checks'
        />
        <ListedBox
         backgroundColor={listBox.rewardCheck}
         text='Reward Checks'
        />
        <ListedBox
         backgroundColor={listBox.otherChecks}
         text='Other Checks'
        />
      </View>

      <Text style={mainHeader}>
        Your Checks
      </Text>

      <View style={[rewards.container]}>
        <View style={rewards.innerContainerTop}>
          <View style={rewards.qr}>
            <QRCode
              value={checks.check2}
              size={80}
              bgColor='black'
              fgColor='white'
            />
          </View>
          <View style={rewards.info}>
            <Text style={rewards.header}>
              50.00 kr
            </Text>
            <Text style={rewards.main}>
              IMwYy-8cdCo-RD87X-F1MFh-w1d1O-SAMPLE
            </Text>
          </View>
        </View>
        <View style={rewards.innerContainerBottom}>
          <Text>
            Info about check
          </Text>
        </View>
      </View>

      <View style={rewards.container}>
        <View style={[rewards.innerContainerTop, { borderColor: 'lightgreen' }]}>
          <View style={rewards.qr}>
            <QRCode
              value={checks.check2}
              size={80}
              bgColor='black'
              fgColor='white'
            />
          </View>
          <View style={rewards.info}>
            <Text style={[rewards.header, { color: 'lightgreen' }]}>
              10% Discount
            </Text>
            <Text style={rewards.main}>
              IMwYy-8cdCo-RD87X-F1MFh-w1d1O-SAMPLE
            </Text>
          </View>
        </View>
        <View style={rewards.innerContainerBottom}>
          <Text>
            On sales over 200kr
          </Text>
        </View>
      </View>

    </View>
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
  rewards: {
    container: {
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
    },
    innerContainerTop: {
      flexDirection: 'row',
      padding: 10,
      borderLeftWidth: 10,
      borderColor: 'cornflowerblue'
    },
    innerContainerBottom: {
      backgroundColor: 'gainsboro',
      paddingLeft: 3,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 10,
      color: 'cornflowerblue'
    },
    main: {
      color: 'grey'
    },
    info: {
      flex: 4,
      flexDirection: 'column',
    },
    qr: {
      flex: 2
    }
  },
  container: {
    flex: 1
  },
  header: {
    color: 'steelblue',
    fontSize: 16,
    fontWeight: '500'
  },
  listBox: {
    mainBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    eachBox: {
      flex: 1,
      margin: 1.5,
      padding: 2,
    },
    iconStyle: {
      alignSelf: 'center',
      padding: 5
    },
    advertCheck: {
      backgroundColor: 'cornflowerblue'
    },
    rewardCheck: {
      backgroundColor: 'lightgreen'
    },
    otherChecks: {
      backgroundColor: 'orange'
    },
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      paddingBottom: 5
    }
  },
  mainHeader: {
    alignSelf: 'center',
    color: 'steelblue',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 10
  }
};

export default Checks;
