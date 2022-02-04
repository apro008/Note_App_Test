import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../misc/colors';

const SearchBar = ({ style }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search Here.." style={[styles.textInput, { ...style }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 1,
  },
  textInput: {
    height: 48,
    width: '80%',
    padding: 10,
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    margin: 10,
    // top: 10,
    borderRadius: 10,
    fontSize: 18,
  },
});

export default SearchBar;
