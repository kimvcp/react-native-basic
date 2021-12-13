import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'

const FlatListSection = ({ textList, onPress }) => {
  const renderText = ({ item, index }) => (
    <TouchableOpacity key={index} onPress={onPress(item)}>
      <View style={styles.textContainer}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <Text style={styles.label}>FlatList</Text>
      <FlatList style={styles.container} data={textList} renderItem={renderText} keyExtractor={(_, index) => index} />
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

export default FlatListSection
