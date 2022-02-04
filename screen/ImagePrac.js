import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const ImagePrac = ({ source, style }) => {
  return (
    <View>
      <Image source={source} style={[styles.pic, { ...style }]} />
    </View>
  );
};

export default ImagePrac;

const styles = StyleSheet.create({
  pic: {
    height: 400,
    width: 400,
  },
});
