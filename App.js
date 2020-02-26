import 'react-native-gesture-handler';
import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert, Button, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LogoTitle() {
  return (
    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
      WELCOME
    </Text>
  );
}
const MyHome = ({navigation, route}) => {
  // console.log(navigation);
  // console.log('------------');
  // console.log(route.params.greeting)
  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    }}>
      <Text>
        {route.params.greeting}
      </Text>
      <Button onPress={() =>navigation.navigate('Details')} title="details"/>
      <Button onPress={() =>navigation.navigate('Anime')} title="koi no uta"/>
      <Button title="go to modal" onPress={() => navigation.navigate("MyModal")}/>

    </View>
  )
}
const Anime = ({navigation, route}) => {
  ///console.log(...props)
  return(
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
      }}>
      <Text>
        Hiroi uchuu no kazu aru hitotsu
        Aoi chikyuu no hiroi sekai de
        Chiisana koi no omoi wa todoku
        Chiisana shima no anata no moto e
        Anata to deai toki wa nagareru
        Omoi wo kometa tegami no furueru
        Itsushika futari tagai ni hibiku
        toki ni hageshiku toki ni setsunaku
        hibiku wa tooku haruka kanata e
        yasashi uta wa sekai wo kaeru
      </Text>
      <Button onPress={() =>navigation.navigate('Details')} title="details"/>
      <Button onPress={() =>navigation.navigate('myhome')} title="my home"/>

    </View>
  )
}
const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation, route})=> {
  //console.log(route)
  return(

      <Tab.Navigator>
        <Tab.Screen name="myhome" component={MyHome} initialParams={{greeting: "hola"}}>
    </Tab.Screen>
    <Tab.Screen name="Anime" component={Anime}>
    </Tab.Screen>

   
    </Tab.Navigator>

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
      <Button onPress={() =>navigation.navigate('Home', {screen: 'Anime'})} title="Anime"/>

    

  </View>
)}

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const App = () => {
  return(

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
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{greeting: "hola"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{greeting: "hello there!"}} 
          options={({route}) => {
             console.log(route)
            return {
              title: `My ${route.name}`
            }
          }}
        />
      </Stack.Navigator>


  )
}
const MyModal  = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
)

const Root = () => {
  return(
    <NavigationContainer>
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
      name='main'
      component={App}
      options={{headerShown: false}} />
      <RootStack.Screen
      name="MyModal"
      component={MyModal} />


    </RootStack.Navigator>
    </NavigationContainer>
  )

}
export default Root