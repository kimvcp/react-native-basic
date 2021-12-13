import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screens/Home'
import Detail from '../../Screens/Detail'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
