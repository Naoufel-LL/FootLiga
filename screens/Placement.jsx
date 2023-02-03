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
const Placement = ({navigation}) => {
 const [data,setData] = useState([])
 const [table,setTable] = useState([])
 const [loading,setLoading] = useState(false)
 const [players,setPlayers] = useState([])
 const getLeague = async () => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem("league");
    if (data !== null) {
      console.log(data);
      const url = `http://api.football-data.org/v4/competitions/${data}/standings`
      const url1 = `http://api.football-data.org/v4/competitions/${data}/scorers`
  axios.get(url,config).then((res)=>{
    setData(res.data)
    setTable(res.data.standings[0].table)
    setLoading(true)
    console.log(res.data.standings[0].table)
})
axios.get(url1,config).then((res)=>{
  setPlayers(res.data.scorers)
  setLoading(true)
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
      <ScrollView>
         {!loading ? <ActivityIndicator color={Colors.main}></ActivityIndicator> : <ScrollView>
         <View style={{width:'100%'}}>
                    {data?.competition?.code == "PD" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/PDcover.jpg')}></Image>}
                    {data?.competition?.code == "WC" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/qatarcover.jpg')}></Image>}
                    {data?.competition?.code == "PL" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/PLcover.jpg')}></Image>}
                    {data?.competition?.code == "PPL" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/PPLcover.jpg')}></Image>}
                    {data?.competition?.code == "SA" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/SAcover.jpg')}></Image>}
                    {data?.competition?.code == "FL1" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/FL1cover.jpg')}></Image>}
                    {data?.competition?.code == "DED" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/DEDcover.jpg')}></Image>}
                    {data?.competition?.code == "CL" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/UEFAcover.jpg')}></Image>}
                    {data?.competition?.code == "BL1" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/BL1cover.jpg')}></Image>}

                    </View>
            <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Placement</Text>
            <DataTable style={{padding:10,marginVertical:0}}>
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
            <TouchableOpacity>
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
            </TouchableOpacity>
          )
       })}
      </DataTable>
      <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Top Scorers</Text>
      <DataTable style={{padding:10}}>
      <DataTable.Header style={{backgroundColor:Colors.main,borderTopLeftRadius:10,borderTopRightRadius:10}}>
        <DataTable.Title style={{flex:4}}><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Name</Text></DataTable.Title>
        <DataTable.Title style={{flex:1}}><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Team</Text> </DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Goals</Text></DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Assists</Text></DataTable.Title>
        <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Penalties</Text></DataTable.Title>
      </DataTable.Header>
      {players.map((player)=>{
          return(
            <DataTable.Row style={{borderWidth:0.2,backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}  key={player.id}>
            <DataTable.Cell style={{flex:4}}><Text style={{fontFamily:'Poppins_400Regular'}}>{player.player.name}</Text></DataTable.Cell>
            <DataTable.Cell style={{flex:1}}><View style={{flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
        <View>{player.team.crest.indexOf('.svg') != -1 ? <SvgUri  width="30"
                             height="40"
                         uri={player.team.crest}></SvgUri> : <Image style={{width:30,height:30}} resizeMode='cover' source={{uri:player.team.crest}}></Image>
                       }</View>
          </View></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{player.goals}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{player.assists ? player.assists : 0}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{player.penalties ? player.penalties : 0}</Text></DataTable.Cell>

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