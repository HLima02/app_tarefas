import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable'

import AddTaskBtn from './components/AddTask'
import TaskList from './components/TaskList'
import AddTaskModal from './components/addTaskModal'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('#task', JSON.stringify(tasks))
    }

    saveTasks()
  }, [])

  useEffect(() => {
    const loadTasks = async () => {
      const tasksStorage = await AsyncStorage.getItem('@task')
      
      if(tasksStorage !== null){
        setTasks(JSON.parse(tasksStorage))
      }
    }

    loadTasks()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor="#171d31" barStyle='light-content' /> */}
      {tasks.length > 0 ? (
        <>
          <View style={styles.content} >
            <Text style={styles.title}>Minhas tarefas</Text>
          </View>

          <FlatList 
          marginHorizontal={10} 
          showsHorizontalScrollIndicator={false}
          data={tasks}
          renderItem={({item}) => <TaskList data={item} tasksList={tasks} setTasks={setTasks}  /> }
          />
        </>
      ) : (
        <>
          <Animatable.View useNativeDriver animation='bounceInUp' duration={1500} style={styles.noTasksBox}>
            <Text style={styles.noTaskTitle}>Sem tarefas</Text>
            <Text style={styles.noTassubTitle}>Você ainda não criou nenhuma tarefa, clique no botão abaixo para cria-las</Text>
          </Animatable.View>
        </>
      )}
      
      <AddTaskModal modalIsOpen={modalOpen} setOpenModal={setModalOpen} tasks={tasks} setTasks={setTasks} />

      <AddTaskBtn setModalOpen={setModalOpen}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31'
  },
  noTasksBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noTaskTitle: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 35,
    marginBottom: 20
  },
  noTassubTitle: {
    color: '#fff',
    textAlign: 'center'
  },
  content: {
    marginBottom: 35
  },
  title: {
    marginTop: 35,
    textAlign: 'center',
    fontSize: 40,
    color: '#fff'
  }
});
