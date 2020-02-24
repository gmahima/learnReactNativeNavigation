import 'react-native-gesture-handler';
import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const HomeScreen = ({navigation, route})=> {
  console.log(route)
  return(
    
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    }}>
      <Text>
        {route.params.greeting}
      </Text>
      <Button onPress={() =>navigation.navigate('Details')} title="details"/>

    </View>
  )
}
const DetailsScreen = ({navigation, route}) =>(
  <View style={{
      flex:1, alignItems: 'center', justifyContent: 'center'
    }}>
      <Text>
      {route.params.greeting}
      </Text>
      <Button onPress={() =>navigation.goBack()} title="go back"/>
      <Button onPress={() =>navigation.push('Details', {greeting: "konnichiwa!"})} title="details"/>
      <Button onPress={() =>navigation.popToTop()} title="pop to top"/>
      <Button onPress={() =>navigation.setParams({greeting: "hajimemashite"})} title="change greeting"/>
    

  </View>
)

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"overview"}} initialParams={{greeting: "hola"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{greeting: "hello there!"}}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App