import { subHeaderFontFamily } from '../../config';

const styles = {
  viewContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
  headerText: {
    display: 'flex'
  },
  hideIconStyle: {
    right: 5,
    position: 'absolute',
    zIndex: 1,
    padding: 5,
    alignSelf: 'flex-end',
    top: 5 },
  modalContainer: {
    flex: 1,
    zIndex: 0,
    overflow: 'hidden',
  },
  sectionContainer: {
    h1Container: {
      marginTop: 10,
      marginLeft: 10,
      marginBottom: -10,
      flexDirection: 'row'
    },
    h1TextStyle: {
      color: '#9e9e9e',
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
