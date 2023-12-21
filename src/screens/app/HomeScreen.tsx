import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { AppStackParamList } from '../../navigation'
import { useNavigation } from '@react-navigation/native'
import { useReduxDispatch, useReduxSelector } from '../../redux'
import { decrement, increment } from '../../redux/appSlide'

type Props = BottomTabScreenProps<AppStackParamList, 'Home'>
type HomeScreenNavigationProps = BottomTabNavigationProp<AppStackParamList, 'Home'>
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>()

  const value = useReduxSelector(state => state.app)
  const dispatch = useReduxDispatch()

  return (
    <View style={styles.container}>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile', {name : 'Dat'})}/>
      <Button title='Go to SetLang' onPress={() => navigation.navigate('Settings', {
        screen : 'SetLang',
        params : {
          lang : "en"
        }
      })}/>

      <Text>{value}</Text>
      <Button title="increment" onPress={() => dispatch(increment(1))} />
      <Button title="decrement" onPress={() => dispatch(decrement(1))} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
})