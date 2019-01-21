/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });






// var ImagePicker = require('react-native-image-picker');

// // More info on all the options is below in the README...just some common use cases shown here
// var options = {
//   title: 'Select Avatar',
//   customButtons: [
//     {name: 'fb', title: 'Choose Photo from Facebook'},
//   ],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images'
//   }
// };

// /**
//  * The first arg is the options object for customization (it can also be null or omitted for default options),
//  * The second arg is the callback which sends object: response (more info below in README)
//  */
// ImagePicker.showImagePicker(options, (response) => {
//   console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   }
//   else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   }
//   else if (response.customButton) {
//     console.log('User tapped custom button: ', response.customButton);
//   }
//   else {
//     let source = { uri: response.uri };

//     // You can also display the image using data:
//     // let source = { uri: 'data:image/jpeg;base64,' + response.data };

//     this.setState({
//       avatarSource: source
//     });
//   }
// });





import { StackNavigator, TabNavigator } from 'react-navigation';
import { LoginPage, Registration, HomePage, AboutPage, ContactPage } from './application/components';
import * as firebase from 'firebase'


// Initialize Firebase
var config = {
};
firebase.initializeApp(config);




const Routing = StackNavigator({
  login: {
    screen: LoginPage,
  },
  signup: {
    screen: Registration,
    navigationOptions: () => ({
      title: 'Register',
      headerStyle: {
        backgroundColor: '#232323',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  Dashboard: {
    screen: TabNavigator({
      Home: {
        screen: HomePage,
        navigationOptions: () => ({
          title: "Main page"
        })
      },
      About: {
        screen: AboutPage
      },
      Contact: {
        screen: ContactPage
      },
    }),
    navigationOptions: () => ({
      header: null
    })
  }
})

export default Routing






// export default TabNavigator({
//   Home: {
//     screen: HomePage
//   },
//   About: {
//     screen: AboutPage
//   },
//   contact: {
//     screen: ContactPage
//   },
// })