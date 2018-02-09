import { subHeaderFontFamily } from '../../config';

const moreStyle = {
  viewContainer: {
     flex: 1,
     padding: 1
  },
  touchableContainer: {
    flex: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 3
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  iconStyle: {
    fontWeight: 'bold',
    marginTop: 10
  },
  textStyle: {
    color: '#424242',
    fontWeight: '400',
    fontFamily: subHeaderFontFamily,
    fontSize: 14
  },
  coming: {
  textStyle: {
    color: '#424242', fontWeight: '700', fontSize: 17
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: 'rgba(255,255,255, 0.5)'
  }
}
};
export default moreStyle;
