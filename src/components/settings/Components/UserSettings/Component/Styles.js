import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const checkStyles = StyleSheet.create({
  checkContainerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 5,
    marginVertical: 0
  },
  swiper: {
    height: (height * 0.3) + 2,
    paddingVertical: 10,
  }
});

export const editStyles = StyleSheet.create({
  editContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
  },
  contentContainer: {
    borderColor: '#BDBDBD',
    flexDirection: 'row',
    flex: 3,
    borderWidth: 1
  },
  textContainer: {
    alignItems: 'center',
    flex: 2,
  },
  dropdownContainer: {
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    flex: 1
  },
  dropdownStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  divider: {
    alignItems: 'center',
    flex: 1
  }
});
export const infoStyles = StyleSheet.create({
  swiper: {
    height: (height * 0.2) + 20,
    paddingVertical: 10,
    zIndex: 0
  },
  swiperChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: (width * 0.4) / 2
  }
});

export const about = StyleSheet.create({
    viewContainer: {
      flex: 1,
      alignItems: 'center'
    },
    aboutHeader: {
      fontWeight: '400',
      color: '#000'
    },
    divider: {
      backgroundColor: '#E0E0E0',
      marginLeft: 10,
      marginRight: 10
    },
    textDescStyle: {
       margin: 10,
       fontWeight: '400',
       color: '#000'
    },
    componentContainerStyle: {
      alignSelf: 'stretch',
      flexDirection: 'column',
      borderColor: '#449faa',
      borderWidth: 1,
    },
});

export const image = StyleSheet.create({
  inputStyle: {
    height: 43,
    borderWidth: 2,
    borderColor: '#449faa',
    backgroundColor: '#FFF',
  }
});

export const location = StyleSheet.create({

});

export const social = StyleSheet.create({
  
});
