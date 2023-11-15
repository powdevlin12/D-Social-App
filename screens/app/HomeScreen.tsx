import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { AppStackParamList } from '../../navigation'
import { useNavigation } from '@react-navigation/native'

type Props = BottomTabScreenProps<AppStackParamList, 'Home'>
type HomeScreenNavigationProps = BottomTabNavigationProp<AppStackParamList, 'Home'>
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>()
  return (
    <View style={styles.container}>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile', {name : 'Dat'})}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
})