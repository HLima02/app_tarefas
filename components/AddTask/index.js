import {StyleSheet, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Ionicons from '@expo/vector-icons/Ionicons';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function AddTaskBtn({setModalOpen}){
  return(
    <AnimatedBtn onPress={() => setModalOpen(true)}  style={styles.addBtn} useNativeDriver animation="bounceInUp" duration={1500} >
      <Ionicons size={40} name="add" color="#fff" />
    </AnimatedBtn>
  )
}

const styles = StyleSheet.create({
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#0094ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    position: 'absolute',
    right: 30,
    bottom: 30,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 0
    }
  }
})