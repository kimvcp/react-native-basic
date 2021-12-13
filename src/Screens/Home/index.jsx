import React, { useState } from 'react'
import { StyleSheet, View, Button, ImageBackground } from 'react-native'
import FlatListSection from '../../components/FlatListSection'
import InputSection from '../../components/InputSection'
import ScrollViewSection from '../../components/ScrollViewSection'
import Title from '../../components/Title'
import TouchableSection from '../../components/TouchableSection'
import imageSrc from '../../../images/home-background.jpeg'

const Home = ({ navigation }) => {
  const [text, setText] = useState('')
  const [textList, setTextlist] = useState([])

  const handleButtonPressed = () => {
    if (!text) return
    setTextlist([...textList, text])
  }

  const handleTextPressed = (item) => () => {
    navigation.navigate('Detail', { item })
  }

  return (
    <ImageBackground source={imageSrc} resizeMode='cover' style={styles.image}>
      <View style={styles.container}>
        <Title label='Todolist Application' />
        <InputSection value={text} onChangeText={setText} />
        <Button title='Default Button' onPress={handleButtonPressed} />
        <TouchableSection onPress={handleButtonPressed} />
        <ScrollViewSection textList={textList} onPress={handleTextPressed} />
        {/* <FlatListSection textList={textList} onPress={handleTextPressed} /> */}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  image: {
    flex: 1
  }
})

export default Home
