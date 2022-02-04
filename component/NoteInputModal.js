import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import RoundIconBtn from './RoundIconBtn';

const NoteInputModal = ({ visible, transparent, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleTextInput = (text, whatTo) => {
    if (whatTo === 'title') setTitle(text);
    if (whatTo === 'desc') setDesc(text);
  };

  const handelModalClose = () => {
    Keyboard.dismiss();
    //onClose();
  };

  const handleOnSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();
    onSubmit(title, desc);
    setTitle('');
    setDesc('');
    onClose();
  };

  return (
    <View>
      <Modal animationType="slide" visible={visible} transparent={transparent}>
        {/* <View style={styles.centeredView}> */}
        <View style={[styles.container, styles.ModalView]}>
          <TextInput
            style={[styles.input, styles.title]}
            placeholder="Title here"
            onChangeText={text => handleTextInput(text, 'title')}
            value={title}
          />
          <TextInput
            multiline
            style={[styles.input, styles.desc]}
            placeholder="Content here"
            onChangeText={text => handleTextInput(text, 'desc')}
            value={desc}
          />
          <View style={[styles.icon]}>
            <TouchableOpacity>
              <RoundIconBtn
                antIconName="check"
                style={{ borderRadius: 40 }}
                onPress={handleOnSubmit}
              />
            </TouchableOpacity>
            {title.trim() || desc.trim() ? (
              <TouchableOpacity>
                <RoundIconBtn
                  antIconName="close"
                  style={{ borderRadius: 40 }}
                  onPress={() => {
                    onClose();
                    setTitle('');
                    setDesc('');
                  }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        {/* </View> */}
        <TouchableWithoutFeedback onPress={handelModalClose}>
          <View style={[styles.modalBD, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  modalBD: {
    flex: 1,
    zIndex: -1,
    //backgroundColor: 'red',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    // // height: '80%',
    // // width: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // elevation: 5,
  },
  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    //marginTop: 22,
    // height: '50%',
    width: '90%',
  },
  ModalView: {
    // flex: 1,
    margin: 20,
    marginTop: 35,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    height: '60%',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    fontSize: 20,
    color: 'black',
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  desc: {
    height: 140,
  },
});

export default NoteInputModal;
