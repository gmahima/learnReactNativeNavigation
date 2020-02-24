import 'react-native-gesture-handler';
import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert, Button, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

function LogoTitle() {
  return (
    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
      WELCOME
    </Text>
  );
}

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
const DetailsScreen = ({navigation, route}) =>{
  const [count, setCount] = useState(0)
  navigation.setOptions({
     headerRight: () =>{
      return(
        <Button onPress={() => setCount(c => c+1)} title="increment"/>
      )

    }
  })
return(
  <View style={{
      flex:1, alignItems: 'center', justifyContent: 'center'
    }}>
      <Text>
      {route.params.greeting}

      {count}
      </Text>
      <Button onPress={() =>navigation.goBack()} title="go back"/>
      <Button onPress={() =>navigation.push('Details', {greeting: "konnichiwa!"})} title="details"/>
      <Button onPress={() =>navigation.popToTop()} title="pop to top"/>
      <Button onPress={() =>navigation.setParams({greeting: "hajimemashite"})} title="change greeting"/>
    

  </View>
)}

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{
          backgroundColor: "#6CC5F8"  
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle:{
          fontWeight: 'bold'
        }    
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle: props => <LogoTitle {...props} />

        }} initialParams={{greeting: "hola"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{greeting: "hello there!"}} 
          options={({route}) => {
             console.log(route)
            return {
              title: `My ${route.name}`
            }
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App