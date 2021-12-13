import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

const InputSection = ({ text, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Todo: </Text>
      <TextInput style={styles.input} value={text} onChangeText={onChangeText} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  },
  label: {
    fontSize: 16,
    color: 'white'
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 16,
    color: 'white'
  }
})

export default InputSection
