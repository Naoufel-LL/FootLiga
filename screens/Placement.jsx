import React from "react";
import Colors from "../constants/Colors";
import { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { DataTable } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  } from '@expo-google-fonts/poppins';
const Placement = () => {
 const [data,setData] = useState([])
 const [table,setTable] = useState([])
 const [loading,setLoading] = useState(false)

 const getLeague = async () => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem("league");
    if (data !== null) {
      console.log(data);
      const url = `http://api.football-data.org/v4/competitions/${data}/standings`
  axios.get(url,config).then((res)=>{
    setData(res.data)
    setTable(res.data.standings[0].table)
    setLoading(true)
    console.log(res.data.standings[0].table)
})
    }
  } catch (error) {
    console.log(error);
  }
};
const config ={ headers : {'X-Auth-Token':'c679b245629747a6a47075479ac4f00e'}}
useEffect(()=>{
  getLeague()
},[])
 
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
   if(fontsLoaded){
    return (
      <ScrollView style={{marginTop:"10%"}}>
         {!loading ? <ActivityIndicator></ActivityIndicator> : <ScrollView>
            <DataTable  style={{padding:10}}>
              <DataTable.Header style={{backgroundColor:Colors.main,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Country</Text></DataTable.Title>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>League</Text></DataTable.Title>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>MatchDay</Text></DataTable.Title>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Season End</Text></DataTable.Title>
              </DataTable.Header>
              <DataTable.Row style={{backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}>
                <DataTable.Cell><SvgUri width="40" height="40" uri={data.area.flag}></SvgUri></DataTable.Cell>
                <DataTable.Cell><View><Image style={{width:60,height:60}} resizeMode='contain' source={{uri:data.competition.emblem}}></Image></View></DataTable.Cell>
                <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{data.season.currentMatchday}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{data.season.endDate}</Text></DataTable.Cell>
              </DataTable.Row>
            </DataTable>
            <Text>Placement</Text>
            <DataTable style={{padding:10,marginVertical:20}}>
      <DataTable.Header style={{backgroundColor:Colors.main,borderTopLeftRadius:10,borderTopRightRadius:10}}>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>#</Text></DataTable.Title>
        <DataTable.Title style={{flex:2}}><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Team</Text> </DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>P</Text></DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>W</Text></DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>D</Text></DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>L</Text></DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Points</Text></DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>GD</Text></DataTable.Title>

      </DataTable.Header>
       {table.map((team)=>{
          return(
            <DataTable.Row style={{borderWidth:0.2,backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}  key={team.id}>
        <DataTable.Cell><Text  style={{fontFamily:'Poppins_400Regular'}}>{team.position}</Text></DataTable.Cell>
        <DataTable.Cell style={{flex:2,}}><View style={{flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
        <View>{team.team.crest.indexOf('.svg') != -1 ? <SvgUri  width="30"
                             height="40"
                         uri={team.team.crest}></SvgUri> : <Image style={{width:30,height:30}} resizeMode='cover' source={{uri:team.team.crest}}></Image>
                       }</View><Text style={{paddingRight:3,fontFamily:'Poppins_400Regular'}}>{team.team.tla}</Text>
          </View> </DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{team.playedGames}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{team.won}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{team.draw}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{team.lost}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{team.points}</Text></DataTable.Cell>
        <DataTable.Cell><Text  style={{color: team.goalDifference > 0 ? '#00ab41' : '#f01e2c',fontFamily:'Poppins_400Regular'}}>{team.goalDifference}</Text></DataTable.Cell>

      </DataTable.Row>
          )
       })}
      </DataTable>
        </ScrollView> }
      </ScrollView>
      );
   }
}
 
import {View,Text,ScrollView,StyleSheet,TouchableOpacity,Image,ActivityIndicator} from "react-native"
export default Placement;