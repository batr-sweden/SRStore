import { LayoutAnimation } from 'react-native';
//ANIMATION FOR DIFFERENT VIEW SIGNUP / SIGNIN
const CustomLayoutSpring = {
    duration: 500,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      springDamping: 0.1,
    },
};
  
export { CustomLayoutSpring };
