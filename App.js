import React from 'react';
import { View, Dimensions } from 'react-native';
import RootNavigation from './navigation/RootNavigation';

const { width, height } = Dimensions.get('screen');

export default function App() {
  return (
    
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
}
























// import {View, Text, Dimensions} from 'react-native';
// // import RootNavigation from './navigation/RootNavigation';
// import RootNavigation from './navigation/RootNavigation';
// import HomeScreen from './src/components/screen/HomeScreen';
// import DetailScreen from './src/components/screen/DetailScreen';

// import TextBox from './src/components/TextBox';
// var {width, height} = Dimensions.get('screen');
// export default function App() {
//   return (
//     <>
//       <View
//         style={{
//           // display: 'flex',
//           // justifyContent: 'center',
//           // alignItems: 'center',
//           // width: width,
//           // height: height,
//           // backgroundColor: '#fff',
//         }}>
//         <RootNavigation />
//         {/* <TextBox icon={'location'} w={0.8} message="Your Name"/>
//     <TextBox icon={'user'} w={0.8} message="Your age" type="phone-pad"/>
//     <TextBox password={true} icon={'lock'} w={0.8} message="Your Name"/>   */}
//       </View>
//     </>
//   );
// }
