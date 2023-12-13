import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CompositeScreenProps  } from '@react-navigation/native'
import { SettingParamList } from '../../../navigation/app/setting/setting.navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { AppStackParamList } from '../../../navigation'

// type SetLangProps = StackScreenProps<SettingParamList, 'SetLang'>
// using nested navigation we are using CompositeScreenProps
type SetLangProps = CompositeScreenProps<
  StackScreenProps<SettingParamList, 'SetLang'>,
  BottomTabScreenProps<AppStackParamList>
>

const SetLangScreen = ({navigation, route} : SetLangProps) => {
  // const route = useRoute<SetLangScreenRouteProp>()
  const {lang} = route.params ?? {}

  const goToHomeHandler = () => {
    navigation.navigate('Home')
  }

  return (
    <View>
      <Text>{`SetLangScreen ${lang ?? "not provide"}`}</Text>
      <TouchableOpacity onPress={goToHomeHandler}>
        <Text>
          Go To Home
        </Text>
        </TouchableOpacity>
    </View>
  )
}

export default SetLangScreen

const styles = StyleSheet.create({})