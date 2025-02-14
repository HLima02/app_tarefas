import { useCallback } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TaskList({data, tasksList, setTasks}){
  const handleDeleteTask = useCallback((data) => {
    const filteredTasks = tasksList.filter(item => item.id != data.id)
    setTasks(filteredTasks)
  })

  return(
    <Animatable.View 
    
    >
       <TouchableOpacity onPress={() => handleDeleteTask(data)} style={styles.container}>
       <FontAwesome6 name="check-circle" size={30} color="#121212" />
       <Text style={styles.task}>{data.task}</Text>
       </TouchableOpacity>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 7,
    elevation: 7,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 2,
      height: 3
    },
  },
  task: {
    color: '#121212',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})