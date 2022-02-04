import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import RoundIconBtn from '../component/RoundIconBtn';

const { height, width } = Dimensions.get('window');

const counterState = ({ navigation }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <RoundIconBtn antIconName={'back'} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.icon}>
        <RoundIconBtn antIconName="minus" onPress={() => setCount(count - 1)} />
        <Text style={styles.text}>{count}</Text>
        <RoundIconBtn antIconName="plus" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
};

export default counterState;

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
    // flexDirection: 'column',
    backgroundColor: '#f0f3fc',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    // borderColor: 'white',
    //borderWidth:1,
    height: height / 3,
    width: width - 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
});
