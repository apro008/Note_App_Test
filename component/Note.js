import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../misc/colors';

const width = Dimensions.get('window').width;

const Note = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text numberOfLines={2}>{title}</Text>
        <Text numberOfLines={2}>{desc}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // zIndex: 1,
    backgroundColor: colors.PRIMARY,
    margin: 2,
    borderWidth: 1,
    borderRadius: 10,
    width: width / 2 - 20,
    padding: 8,
  },
});

export default Note;
