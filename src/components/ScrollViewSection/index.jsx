import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'

const ScrollViewSection = ({ textList, onPress }) => {
  const renderTextList = () =>
    textList?.map((text, index) => (
      <TouchableOpacity key={index} onPress={onPress(text)}>
        <View style={styles.textContainer}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    ))

  return (
    <View>
      <Text style={styles.label}>ScrollView</Text>
      <ScrollView style={styles.container}>{renderTextList()}</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  label: {
    fontSize: 18
  },
  textContainer: {
    justifyContent: 'center',
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#FFA000'
  }
})

export default ScrollViewSection
