import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import SearchBar from '../component/SearchBar';
import RoundIconBtn from '../component/RoundIconBtn';
import NoteInputModal from '../component/NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../component/Note';
import { useNotes } from '../component/context/NoteProvider';

const NoteScreen = ({ navigation, route }) => {
  const { user } = route.params;
  const [greet, setGreet] = useState('Evening');

  const [modalVisible, setModalVisible] = useState(false);

  const { notes, setNotes } = useNotes();

  useEffect(() => {
    findGreet();
  }, []);

  const findGreet = () => {
    const hrs = new Date().getHours();
    console.log(hrs);
    if (hrs < 12) {
      setGreet('Morning');
    } else if (hrs < 18) {
      setGreet('Afternoon');
    } else {
      setGreet('Evening');
    }
  };

  const handleOnSubmit = async (title, desc) => {
    const note = {
      id: Math.ceil(Math.random() * 1000),
      title,
      desc,
      Time: new Date().getTime(),
    };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const openNote = note => {
    navigation.navigate('NoteDetails', { note });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{`Good ${greet} ${user}`}</Text>
      {/* <View style={styles.text3Container}>
        <Text style={{fontSize: 15}}>{`Good ${greet}`}</Text>
      </View> */}
      <SearchBar />

      <FlatList
        columnWrapperStyle={styles.FlatList}
        numColumns={2}
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Note item={item} onPress={() => openNote(item)} />}
      />

      {notes.length <= 0 ? (
        <View style={[styles.text2Container, StyleSheet.absoluteFillObject]}>
          <Text style={styles.text2}>Add Notes</Text>
        </View>
      ) : null}
      <TouchableOpacity style={styles.Button}>
        <RoundIconBtn antIconName="plus" onPress={() => setModalVisible(!modalVisible)} />
      </TouchableOpacity>
      <View style={styles.modal}>
        <NoteInputModal
          transparent={false}
          visible={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
          onSubmit={handleOnSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  icon: {
    borderWidth: 1,
    position: 'absolute',
    zIndex: -1,
  },
  container: {
    flex: 1,
    //borderWidth: 2,
    //borderColor: 'blue',
    paddingHorizontal: 10,
  },
  text3Container: {
    //borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 26.5,
  },
  text2Container: {
    flex: 1,
    borderWidth: 1,
    //borderColor:'red',
    //flexDirection:'',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.3,
    textTransform: 'uppercase',
  },
  Button: {
    // flex: 1,
    // flexDirection:''
    // borderWidth: 1,
    // borderColor: 'red',
    // //paddingHorizontal: -20,
    // //padding: 20,
    // bottom:30,
    // width:60,
    zIndex: 1,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  modal: {
    flex: 1,
    // paddingTop: 50,
    // height: '88%',
    // width: '98%',
    // backgroundColor: 'red',
    position: 'absolute',
    // zIndex: -1,
    // left: 10,
    //borderWidth: 1,
    //borderColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default NoteScreen;
