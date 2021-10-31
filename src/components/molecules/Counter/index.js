import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IC_Btn_Min, IC_Btn_Plus} from '../../../res';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IC_Btn_Min />
      </TouchableOpacity>
      <Text style={{marginHorizontal: 10}}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <IC_Btn_Plus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
