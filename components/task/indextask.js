import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styletask.js';
const Task = (props) => {
  const {number} = props;
  const numberText = number < 10 ? `0${number}` : number;
  const iteamBg = number % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity
    onPress={props.onDeleteTask}
    >
      <View style={styles.listView}>
        <View style={[styles.listNumbers,iteamBg]}>
          <Text>{numberText}</Text>
        </View>
        <Text style={styles.contain}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Task;
