import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../res';

const BoxItemCategories = ({text, color, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperImg(color)}>{icon}</View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BoxItemCategories;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 17,
  },
  wrapperImg: color => ({
    height: 60,
    width: 60,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  text: {
    marginTop: 10,
    color: colors.darkGreen,
    fontSize: 14,
    fontFamily: fonts.SemiBold,
  },
});
