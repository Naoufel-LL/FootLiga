import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Matches from './screens/Matches';
import Tabs from './Tabs';
import MyTeam from './screens/MyTeam';
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>
       <Stack.Screen name="Matches" component={Matches} options={{headerShown:false}}></Stack.Screen>
       <Stack.Screen name="MyTeam" component={MyTeam} options={{headerShown:false}}></Stack.Screen>
       <Stack.Screen name="HomeApp" component={Tabs} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
