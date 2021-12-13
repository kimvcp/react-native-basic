import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const TouchableSection = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.button}>
          <Text>Touchable Hightlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.button}>
          <Text>Touchable Opacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>Touchable Without Feedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    marginVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  buttonContainer: {
    marginBottom: 32
  },
  button: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'skyblue',
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default TouchableSection
