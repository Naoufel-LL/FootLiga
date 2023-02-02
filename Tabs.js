import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Colors from './constants/Colors'
import Home from './screens/Home'
import Matches from './screens/Matches'
import MyTeam from './screens/MyTeam'
import Placement from './screens/Placement'
import HomeApp from './screens/HomeApp'
export default function Tabs() {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown:false,
        headerTitleAlign:'center',
         tabBarStyle:{
             paddingVertical:10,height:70
         },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Matches') {
              iconName = focused
                ? 'soccer-ball-o'
                : 'soccer-ball-o';
            } else if (route.name === 'HomeApp') {
              iconName = focused ? 'newspaper-o' : 'newspaper-o';
            } else if (route.name == 'MyTeam'){
                iconName = focused ? 'heart' : 'heart';
              }else if (route.name == 'Standing'){
                iconName = focused ? 'table' : 'table';
              }

            // You can return any component that you like here!
            return <FontAwesome name={iconName}  size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.main,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeApp" component={HomeApp}></Tab.Screen>
         <Tab.Screen name="Matches" component={Matches} ></Tab.Screen>
         <Tab.Screen name="MyTeam" component={MyTeam} ></Tab.Screen>
         <Tab.Screen name="Standing" component={Placement} ></Tab.Screen>
    </Tab.Navigator>
  )
}