import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { SettingParamList } from '../../../navigation/app/setting/setting.navigation'

type SettingScreenNavigationProps = NavigationProp<SettingParamList, 'Setting'>

const SettingScreen = () => {
  const navigation = useNavigation<SettingScreenNavigationProps>()
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button title='Setting Lang' onPress={() => navigation.navigate('SetLang', {
        lang : 'vi'
      })}/>
      <Button title='Setting Lang' onPress={() => navigation.navigate('SetLang')}/>
      <Button title='Setting Theme' onPress={() => navigation.navigate('SetTheme')}/>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})