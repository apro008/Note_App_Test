import React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../misc/colors';

const RoundIconBtn = ({ size, color, antIconName, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 25}
      color={color || colors.LIGHT}
      style={[styles.icons, { ...style }]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icons: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 30,
    padding: 16,
    elevation: 2,
    // width: '17%',
  },
});

export default RoundIconBtn;
