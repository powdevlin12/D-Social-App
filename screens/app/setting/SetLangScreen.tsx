import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { SettingParamList } from '../../../navigation/app/setting/setting.navigation'

type SetLangScreenRouteProp = RouteProp<SettingParamList, 'SetLang'>
const SetLangScreen = () => {
  const route = useRoute<SetLangScreenRouteProp>()
  const {lang} = route.params ?? {}
  return (
    <View>
      <Text>{`SetLangScreen ${lang ?? "not provide"}`}</Text>
    </View>
  )
}

export default SetLangScreen

const styles = StyleSheet.create({})