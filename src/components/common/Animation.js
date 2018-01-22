import { LayoutAnimation } from 'react-native';

const extendedMoreAnimation = ({ duration, update }) => {
  return (
    duration: 500,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      springDamping: 0.1,
    }
  );
  };

  export { extendedMoreAnimation };
