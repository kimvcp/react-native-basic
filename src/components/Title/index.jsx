import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Title = ({ label }) => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>{label}</Text>
    </SafeAreaView>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white'
  }
})
