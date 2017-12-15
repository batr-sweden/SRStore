import { secondaryColor, subHeaderFontFamily } from '../../config';

const styles = {
  viewContainer: {
    flex: 1,
  },
  logOut: {
    btnStyle: {
      backgroundColor: secondaryColor,
      borderRadius: 5,
      borderWidth: 0,
      flex: 0,
      marginBottom: 10,
    },
    txtStyle: {
      color: '#fff',
      fontSize: 18
    }
  },
  sectionContainer: {
    header: {
      fontSize: 22,
      paddingLeft: 10,
      paddingBottom: 5,
      color: '#9e9e9e',
      fontFamily: subHeaderFontFamily
    },
    msgContainer: {
      backgroundColor: '#fff'
    },
  },
  sectionStyle: {
    btnStyle: {
      borderWidth: 0
    },
    btnTxt: {
      alignSelf: 'flex-start',
      color: '#000',
      paddingTop: 0,
      paddingBottom: 0
    },
    dashColor: {
      color: '#bdbdbd'
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    }
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingVertical: 20
  }
};

export { styles };
