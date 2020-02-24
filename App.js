import 'react-native-gesture-handler';
import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const HomeScreen = ()=> (
  <View style={{
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }}>
    <Text>
      Hello!
    </Text>
  </View>
)

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App