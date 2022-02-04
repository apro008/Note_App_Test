import React from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import RoundIconBtn from './RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from './context/NoteProvider.js';

const NoteDetails = ({ route, navigation }) => {
  const { note } = route.params;
  const { Time } = route.params.note;

  const { setNotes } = useNotes();

  const getTime = Time => {
    const date = new Date(Time);
    const year = date.getFullYear();
    const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    const dat = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    return `${dat}/${month}/${year} - ${hour}:${minute}:${second}`;
  };

  const deleteAlert = () => {
    Alert.alert(
      'Are You Sure',
      'This is delete your note Permanently',
      [
        {
          text: 'Delete',
          onPress: deleteNote,
        },
        {
          text: 'Ask Me Later',
          onPress: () => console.log('ask me later'),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem('notes');
    console.log('result', result);
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter(n => n.id !== note.id);
    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textTime}>{`Created At ${getTime(Time)}`}</Text>
        <Text style={styles.textTitle}>{note.title}</Text>
        <Text style={styles.textDesc}>{note.desc}</Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <RoundIconBtn antIconName="edit" style={styles.btnEdit} onPress={deleteAlert} />
        <RoundIconBtn antIconName="delete" style={styles.btnDelete} onPress={deleteAlert} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnDelete: { backgroundColor: 'red' },
  btnEdit: { backgroundColor: 'grey', marginBottom: 10 },
  btnContainer: {
    position: 'absolute',
    // alignSelf: 'flex-end',
    padding: 10,
    right: 15,
    bottom: 50,
  },
  textTime: {
    textAlign: 'right',
    fontSize: 14,
    fontStyle: 'italic',
    margin: 3,
    marginRight: 10,
  },
  container: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'red',
    flexDirection: 'column',
  },
  textTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#dbb2ff',
    textAlign: 'center',
    textTransform: 'capitalize',
    //   borderBottomWidth: 1,
    textDecorationLine: 'underline',
  },
  textDesc: {
    fontSize: 20,
    fontWeight: 'normal',
    textTransform: 'capitalize',
    margin: 5,
    marginTop: 20,
    textAlign: 'justify',
  },
});

export default NoteDetails;
