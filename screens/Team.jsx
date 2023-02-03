import React, { useEffect,useState } from "react";
import Colors from "../constants/Colors";
import axios, { Axios } from "axios";

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
  import { SvgUri } from 'react-native-svg';

const Team = ({navigation,route}) => {
    const [loading,setLoading] = useState(false)
    const [team,setTeam] =useState([])
    const [matches,setMatches] = useState()
    const {teamId} = route.params
    const loadData = (id) => {
      const url = `http://api.football-data.org/v4/teams/${id}`
      const url1 = `http://api.football-data.org/v4/teams/${id}/matches?status=SCHEDULED`
      const config ={ headers : {'X-Auth-Token':'c679b245629747a6a47075479ac4f00e'}}
      axios.get(url,config).then((res)=>{
        setTeam(res.data)  
        console.log(team.runningCompetitions)  
        setLoading(true)
          })
          axios.get(url1,config).then((res)=>{
            setMatches(res.data.matches)  
            console.log(matches)  
              })
    }
    useEffect(()=>{
      loadData(teamId)
    },[teamId])
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
                {!loading ? <ActivityIndicator size={30} color={Colors.main}></ActivityIndicator> : 
                 <View>
                   <StatusBar barStyle="light-content" backgroundColor={Colors.main} />
                   <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Overview</Text>
                  <DataTable  style={{padding:10}}>
              <DataTable.Header style={{backgroundColor:Colors.main,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>TeamLogo</Text></DataTable.Title>
                <DataTable.Title style={{flex:2}}><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Name</Text></DataTable.Title>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Founded</Text></DataTable.Title>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Country</Text></DataTable.Title>
              </DataTable.Header>
              {navigation.setOptions({ title: team.name})}
              <DataTable.Row style={{backgroundColor:'#fff',padding:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}>
                <DataTable.Cell><View>{team?.crest?.indexOf('.svg') != -1 ? <SvgUri  width="50"
                             height="50"
                         uri={team?.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='cover' source={{uri:team.crest}}></Image>
                       }</View></DataTable.Cell>
                <DataTable.Cell style={{flex:2}}><Text style={{fontFamily:'Poppins_400Regular'}}>{team.name}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{team.founded}</Text></DataTable.Cell>
                <DataTable.Cell><View>{team?.area?.flag.indexOf('.svg') != -1 ? <SvgUri  width="50"
                             height="50"
                         uri={team?.area.flag}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='cover' source={{uri:team.area.flag}}></Image>
                       }</View></DataTable.Cell>
              </DataTable.Row>
            </DataTable>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'95%',padding:20,backgroundColor:'#fff',borderRadius:10}}>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5}}><Text style={{fontFamily:'Poppins_500Medium'}}>Full Name</Text><Text style={{fontFamily:'Poppins_400Regular'}}>{team.name}</Text></View>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5}}><Text style={{fontFamily:'Poppins_500Medium'}}>Short Name</Text><Text style={{fontFamily:'Poppins_400Regular'}}>{team.shortName}</Text></View>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5}}><Text style={{fontFamily:'Poppins_500Medium'}}>TLA</Text><Text style={{fontFamily:'Poppins_400Regular'}}>{team.tla}</Text></View>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5}}><Text style={{fontFamily:'Poppins_500Medium'}}>Founded</Text><Text style={{fontFamily:'Poppins_400Regular'}}>{team.founded}</Text></View>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5}}><Text style={{fontFamily:'Poppins_500Medium'}}>Venue</Text><Text style={{fontFamily:'Poppins_400Regular'}}>{team.venue}</Text></View>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5}}><Text style={{fontFamily:'Poppins_500Medium'}}>Website</Text><Text style={{fontFamily:'Poppins_400Regular'}}>{team.website}</Text></View>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5}}><Text style={{fontFamily:'Poppins_500Medium'}}>Colors</Text><Text style={{fontFamily:'Poppins_400Regular'}}>{team.clubColors}</Text></View>
                 <View style={{flexDirection:'row',justifyContent:"space-between",paddingVertical:5,alignItems:"center",alignContent:"center"}}><Text style={{fontFamily:'Poppins_500Medium'}}>Competitions</Text><View style={{flexDirection:'row'}}>{team.runningCompetitions.map((cp)=><Image resizeMode="contain" style={{width:50,height:50,}} source={{uri:cp.emblem}}></Image>)}</View></View>
                
                 </View>
                </View>
                <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Schedule</Text>
                 <ScrollView horizontal>
                 {matches?.map((match)=>{
                              return(
                                <View style={{width:400,height:200}}>
                                    <TouchableOpacity>
                                    <View style={{flexDirection:'row',width:'90%',justifyContent:"space-around",alignItems:'center',backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,padding:30,marginVertical:10,alignContent:'center'}}>
                          <View  style={{flexDirection:'column',alignItems:'center'}}>
                          {match.homeTeam.crest.indexOf('.svg') != -1 ? <SvgUri width="50"
                                    height="50"
                         uri={match.homeTeam.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.homeTeam.crest}}></Image>
                       }
                          <Text style={{fontFamily:'Poppins_400Regular',paddingVertical:10,fontSize:15}}>{match.homeTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.homeTeam.tla}</Text>
                          </View>
                           
                           <View style={{flexDirection:'column',alignItems:'center'}}>
                               <View style={{flexDirection:'row',paddingHorizontal:20}}>
                               <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.fullTime.home}</Text>
                               <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.competition.emblem}}></Image>
                              <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.fullTime.away}</Text> 
                               </View>
                               <View>
                                   <Text style={{fontFamily:'Poppins_400Regular'}}>{match.utcDate.slice(0,10)}</Text>
                               </View>
                           </View>
                           <View  style={{flexDirection:'column',alignItems:'center'}}>
                           {match.awayTeam.crest.indexOf('.svg') != -1 ? <SvgUri width="50"
                             height="50"
                         uri={match.awayTeam.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.awayTeam.crest}}></Image>
                       }
                          <Text style={{fontFamily:'Poppins_400Regular',paddingVertical:10,fontSize:15}}>{match.awayTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.awayTeam.tla}</Text>
                          </View>  
                          
                        
                           </View>
                                    </TouchableOpacity>
                               </View>
                              )
                        })}
                 </ScrollView>
                <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Squad</Text>
                 <View>
                  <DataTable style={{padding:10,}}>
              <DataTable.Header style={{backgroundColor:Colors.main,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <DataTable.Title style={{flex:2}}><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Player</Text></DataTable.Title>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Position</Text></DataTable.Title>
                <DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Nationality</Text></DataTable.Title>
                  </DataTable.Header>
                  {team.squad.map((player)=>{
                     return(
              <DataTable.Row style={{backgroundColor:'#fff',padding:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}>
                <DataTable.Cell style={{flex:2}}><Text style={{fontFamily:'Poppins_400Regular'}}>{player.name}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{player.position}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{player.nationality}</Text></DataTable.Cell>
                  
                   </DataTable.Row>
                     )
                  })}
                  </DataTable>
                 </View>
                
                 </View> 
                }   
            </ScrollView>
          );
    }
}
 import { DataTable } from "react-native-paper";
import {View,Text,ScrollView,StyleSheet,TouchableOpacity,Image,ActivityIndicator,RefreshControl, SafeAreaView,StatusBar} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
export default Team;