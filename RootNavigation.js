import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../src/components/screen/SplashScreen';
import HomeScreen from '../src/components/screen/HomeScreen';
import DetailScreen from '../src/components/screen/DetailScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}











// import React, {useState} from 'react';
// import {Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import Home from "../src/components/screen/Home";
// // import RegistrationPage from "../src/components/screen/RegistrationPage";
// import SplashScreen from '../src/components/screen/SplashScreen';
// import HomeScreen from '../src/components/screen/HomeScreen';
// import DetailScreen from '../src/components/screen/DetailScreen';

// const Stack = createNativeStackNavigator();

// export default function RootNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* <Stack.Screen name="RegistrationPage" component={RegistrationPage}/>
//           <Stack.Screen name="Home" component={Home}/> */}
//         <Stack.Screen
//           name="Splash"
//           component={SplashScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
