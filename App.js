/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Intro from './screen/Intro';
import NoteScreen from './screen/NoteScreen';
import NoteDetails from './component/NoteDetails';
import Practice from './screen/practice';
import Slider from './component/Slider';
import store from './src/store';
import reduxCounter from './screen/reduxCounter';
import Welcome from './screen/Welcome';
import counterState from './screen/counterState';
import NoteProvider from './component/context/NoteProvider';

//import colors from './misc/colors';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   return <Intro />;
// };
const Stack = createStackNavigator();
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
//store.subscribe(() => console.log(store.getState()));

const App = () => {
  // const [user, setUser] = useState({});
  // const findUser = async () => {
  //   const result = await AsyncStorage.getItem('user');
  //   console.log(`from app result`, result);
  //   setUser(JSON.parse(result));
  // };

  // useEffect(() => {
  //   findUser();
  // }, []);

  // const renderNoteScreen = props => <NoteScreen {...props} user={user} />;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NoteProvider>
          <Stack.Navigator
            initialRouteName="Welcome"
            headerMode="none"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#dbb2ff',
              },
            }}>
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{
                title: 'Note It',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#dbb2ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Note"
              component={NoteScreen}
              //initialParams={{user: user}}
              //screenProps={{user}}
            />
            <Stack.Screen name="NoteDetails" component={NoteDetails} />
            <Stack.Screen name="Practice" component={Practice} />
            <Stack.Screen name="Slider" component={Slider} />
            <Stack.Screen name="reduxCounter" component={reduxCounter} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="counterState" component={counterState} />
          </Stack.Navigator>
        </NoteProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
