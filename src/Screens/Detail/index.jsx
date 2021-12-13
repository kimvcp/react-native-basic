import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import imageSrc from '../../../images/detail-background.jpeg'

const Detail = ({ navigation, route }) => {
  const { item } = route?.params

  return (
    <ImageBackground source={imageSrc} resizeMode='cover' style={styles.image}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{item}</Text>
          <Button title='Go to home' onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  textContainer: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  image: {
    flex: 1
  },
  label: {
    fontSize: 48
  }
})

export default Detail
