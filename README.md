## About ViewPropTypes warning
This a warning is caused by lottie-react-native module, for solution, open next file:
>` ./node_modules/lottie-react-native/src/js/LottieView.js`
Delete ViewPropTypes import and add the next line below end of imports:
>`import {ViewPropTypes} from 'deprecated-react-native-prop-types';`