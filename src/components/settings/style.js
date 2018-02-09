import { secondaryColor, subHeaderFontFamily } from '../../config';

const styles = {
  viewContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
  headerText: {
    display: 'flex'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#eceff1',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    padding: 5,
    marginTop: 30
  },
  sectionContainer: {
    header: {
      fontSize: 22,
      padding: 10,
      color: '#9e9e9e',
      fontFamily: subHeaderFontFamily
    },
    msgContainer: {
      backgroundColor: '#fff'
    },
  },
  sectionStyle: {
    btnStyle: {
      borderWidth: 0,
      backgroundColor: '#fff'
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
      margin: 2,
      backgroundColor: '#fff'
    }
  },
  contentContainerContainer: {
    flex: 1,
  }
};

export { styles };
