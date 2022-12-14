import {
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';
import styles from './styleinput';
const Form = (props) => {
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    if (task.length === 0) {
      alert('Vui long nhap cong viec');
      return false;
    }
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  };
  return (
      
      <View style={styles.footer}>
          <TextInput
          value={task}
            onChangeText={(text) => setTask(text)}
            style={styles.input}
            placeholder="Your task"
          />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addButton}>
            <View style={styles.plusButton}>
              <Text>+</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
  );
};
export default Form;
