import { Button, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'

const ReanimatedOne = () => {
  const SIZE = 150


  const progress = useSharedValue(1)
  const scale = useSharedValue(1)
  
  const handlePress = () => {
    progress.value = withRepeat(withTiming(0.1, {
      duration : 1000
    }), -1, true)
    scale.value = withRepeat(withSpring(2), -1, true)
  }

  const handlePrePress = () => {
    progress.value = withTiming(1, {
      duration : 1000
    })
    scale.value = withSpring(1)
  }

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity : progress.value,
      transform : [{
        scale : scale.value,
      }, 
      {
      rotate : `${Math.PI * progress.value * 2} rad`
    }],
      borderRadius : SIZE * progress.value / 2
    }
  }, [])

  useEffect(() => {
    
  }, [])
  return (
    <View style={styles.container}>
      <Animated.View style={[{height : SIZE, width : SIZE, backgroundColor : 'blue'}, reanimatedStyle]}>

      </Animated.View>
      <View style={{height : 200}}/>
      <Button title='Animated' onPress={handlePress}/>
      <Button title='PrevAnimated' onPress={handlePrePress}/>
    </View>
  )
}

export default ReanimatedOne

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  }
})