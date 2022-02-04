import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import RoundIconBtn from '../component/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const getLocalItem = async () => {
      const a = await AsyncStorage.getItem('user');
      setName(JSON.parse(a) || '');
    };
    getLocalItem();
  }, []);
  const handleOnChangeText = text => setName(text);

  const handleSubmit = async () => {
    // const user = {name: name};
    await AsyncStorage.setItem('user', JSON.stringify(name));
    navigation.navigate('Note', {user: name});
  };

  // const getLocalItem = async () => {
  //   return await AsyncStorage.getItem('user');
  // };
  // const [user, setUser] = useState({});
  // const findUser = async () => {
  //   const result = await AsyncStorage.getItem('user');
  //   console.log(`from app result`, result);
  //   setUser(JSON.parse(result));
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Your Name To Continue:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="eg. Name"
        value={name}
        onChangeText={handleOnChangeText}
      />
      {name.trim().length >= 4 ? (
        <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
      ) : (
        <RoundIconBtn antIconName="close" onPress={() => setName('')} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    height: 50,
    width: '80%',
    borderWidth: 1.5,
    borderRadius: 13,
    //fontWeight: 'bold',
    fontSize: 25,
    borderColor: '#dbb2ff',
    color: '#dbb2ff',
  },
});

export default Intro;
