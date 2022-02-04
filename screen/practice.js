import React, { useState, useReducer, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  View,
  TextInput,
} from 'react-native';
import ImagePrac from './ImagePrac';
import RoundIconBtn from '../component/RoundIconBtn';
import { Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload };
    case 'decrement':
      return { ...state, counter: state.counter - action.payload };
    case 'blankCounter':
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const Practice = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch({ type: 'blankCounter' });
    setRefreshing(false);
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 2000);
  });

  const decrement = num => {
    dispatch({ type: 'decrement', payload: num });
  };
  const increment = num => {
    dispatch({ type: 'increment', payload: num });
  };

  const [value, setValue] = useState('0');

  const B1 = useRef();
  const B2 = useRef();

  const PressOne = () => {
    console.log('Hello');
    console.log(B1);
  };
  const PressTwo = () => {
    console.log('World');
    console.log(B2.current.viewConfig.NativeProps);
    B2.current.viewConfig.NativeProps.borderWidth = 5;
  };

  return (
    // <View style={{ flex: 1 }}>
    //   <TextInput style={{ height: 40, width: 200, borderWidth: 1 }} value={value} ref={B1} />
    //   <TextInput
    //     style={{ height: 40, width: 200, borderWidth: 1, marginVertical: 20 }}
    //     value={value}
    //     keyboardType="numeric"
    //     ref={B2}
    //   />
    //   <View>
    //     <Button title="Button One" onPress={PressOne} />
    //     <Button title="Button Two" onPress={PressTwo} />
    //   </View>
    //   <Text>{value}</Text>
    // </View>
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.button}>
        <RoundIconBtn antIconName={'back'} onPress={() => navigation.goBack()} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          increment(1);
        }}>
        <Text style={styles.increase}>Increment</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{`Current Count = ${counter}`}</Text>
      <TouchableOpacity onPress={() => decrement(1)}>
        <Text style={styles.decrease}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => increment(20)}>
        <Text style={styles.inc20}>Increase By 20</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => decrement(20)}>
        <Text style={styles.dec20}>Decrease By 20</Text>
      </TouchableOpacity>
      <ImagePrac source={require('../asset/beach.jpg')} style={styles.image} />
    </ScrollView>
  );
};

export default Practice;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  increase: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#378246',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  decrease: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9e3131',
  },
  inc20: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ff2a',
  },
  dec20: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  image: {
    height: 100,
    width: 100,
  },
});
