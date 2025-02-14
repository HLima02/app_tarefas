import { useState } from 'react'
import { Modal, SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)


export default function AddTaskModal({modalIsOpen, setOpenModal, tasks, setTasks}) {
  const [inputTxt, setInputTxt] = useState('')

  

  function handleAddTask(){
    if(inputTxt == ''){
      alert('Disgite uma tarefa')
      console.log(tasks)
      return
    }
    
    const data = {
      key: inputTxt,
      task: inputTxt
    }

    setTasks([...tasks, data])
    setInputTxt('')
    setOpenModal(false)
  }

  return(
    <Modal animationType='slide' transparent={false} visible={modalIsOpen}>
      <SafeAreaView style={styles.modal}>
        <View>
          <TouchableOpacity style={styles.modalHeader} onPress={() => setOpenModal(false)}>
            <Ionicons style={{marginLeft: 5, marginRight: 5}} name="arrow-back" color="#fff" size={25} />
            <Text style={styles.modalTitle}>Nova tarefa</Text>
          </TouchableOpacity>

          <Animatable.View style={styles.modalBody} animation='fadeInUp' useNativeDriver>
            <TextInput 
            multiline={true} 
            placeholderTextColor="#747474" 
            placeholder='O que precisa fazer hoje? '
            value={inputTxt}
            onChangeText={(txt) => setInputTxt(txt)}
            style={styles.txtInput}
            />
          </Animatable.View>

          <TouchableOpacity style={styles.hadleAdd} onPress={handleAddTask}>
            <Text style={styles.handleAddTxt}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#171d31'
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalTitle: {
    color: '#fff',
    fontSize: 23,
    color: '#fff'
  },
  modalBody:{
    marginTop: 15
  },
  txtInput: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    fontSize: 15,
    padding: 9,
    height: 200,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5
  },
  hadleAdd: {
    backgroundColor: '#fff',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5
  },
  handleAddTxt: {
    fontSize:20
  }
})