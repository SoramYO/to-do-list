import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  TouchableOpacity,
  Image,
  CreateButton,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  ScrollView,
  AccentColoredFab,
  Icon,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TextInput,
  Input,
} from 'react-native';
import Task from './components/task/indextask';
import styles from './App.component.style';
import Form from './components/input/indexinput';
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert('Thong bao', 'Ban chac chan muon xoa', [
      {
        text: 'OK',
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
      { text: 'Cancel', onPress: () => {} },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.fontHeader}>Todo List</Text>

      <ScrollView>
        <View style={styles.body}>
          {taskList.map((listView, index) => {
            return (
              <Task
                key={index}
                title={listView}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </View>
        </ScrollView>
        <View>
          <Form onAddTask={handleAddTask} />
        </View>
      
    </View>
  );
};
export default App;
