import { View,Text, ScrollView, ActivityIndicator,Image, TouchableOpacity} from "react-native";
import { DataTable } from "react-native-paper";
import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import Colors from "../constants/Colors";
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
import { SvgUri } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeAppWc = ({navigation}) => {

     const [matches,setMatches] = useState([])
     const [loading,setLoading] = useState(false)
     const [data,setData]=useState([])
     const [teams,setTeams] = useState([])
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

      const getLeague = async () => {
        // get Data from Storage
        try {
          const data = await AsyncStorage.getItem("league");
          if (data !== null) {
            console.log(data);
            const url = `http://api.football-data.org/v4/competitions/${data}/matches`
        axios.get(url,config).then((res)=>{
          setData(res.data)
          setMatches(res.data.matches)
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
       
      const filtredmatches = matches.filter((match)=>{
          return match.status == "TIMED"
      })
      console.log(filtredmatches)
     if(fontsLoaded){
        return ( 
            <ScrollView style={{backgroundColor:'#fff'}}>
                {!loading ? <ActivityIndicator></ActivityIndicator>:
                <View>
                   {data?.competition?.code == "WC" && <View>
                    <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/qatarcover.jpg')}></Image>
                    <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Overview</Text>

<DataTable  style={{padding:10,marginBottom:20}}>
<DataTable.Header style={{backgroundColor:Colors.main,borderTopLeftRadius:10,borderTopRightRadius:10}}>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Country</Text></DataTable.Title>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>League</Text></DataTable.Title>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Winner</Text></DataTable.Title>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Match</Text></DataTable.Title>
</DataTable.Header>
<DataTable.Row style={{backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}>
<DataTable.Cell><View><SvgUri width="50" height="50" uri="https://crests.football-data.org/8030.svg"></SvgUri></View></DataTable.Cell>
<DataTable.Cell><View><Image style={{width:60,height:60}} resizeMode='contain' source={{uri:data?.competition?.emblem}}></Image></View></DataTable.Cell>
<DataTable.Cell><View><SvgUri width="50" height="50" uri="https://crests.football-data.org/762.svg"></SvgUri></View></DataTable.Cell>
<DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>64</Text></DataTable.Cell>
</DataTable.Row>
</DataTable>
                    <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
            <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Groups</Text>
            </View>
                    <Image style={{width:'100%',height:300}} resizeMode="contain" source={require('../assets/leagues/grp.jpg')}></Image>
                    </View>}

                    {data?.competition?.code == "CL" && <View>
                    <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/UEFAcover.jpg')}></Image>
                    <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Overview</Text>

<DataTable  style={{padding:10,marginBottom:20}}>
<DataTable.Header style={{backgroundColor:Colors.main,borderTopLeftRadius:10,borderTopRightRadius:10}}>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Area</Text></DataTable.Title>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>League</Text></DataTable.Title>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Season</Text></DataTable.Title>
<DataTable.Title><Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Match Played</Text></DataTable.Title>
</DataTable.Header>
<DataTable.Row style={{backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}>
<DataTable.Cell><View><SvgUri width="50" height="50" uri="https://crests.football-data.org/EUR.svg"></SvgUri></View></DataTable.Cell>
<DataTable.Cell><View><Image style={{width:60,height:60}} resizeMode='contain' source={{uri:data?.competition?.emblem}}></Image></View></DataTable.Cell>
<DataTable.Cell><View><Text style={{fontFamily:'Poppins_400Regular'}}>{data.filters.season}</Text></View></DataTable.Cell>
<DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{data.resultSet.played}</Text></DataTable.Cell>
</DataTable.Row>
</DataTable>
                    </View>}
    
       {data?.competition?.code != "WC" && 
             <View><Text style={{fontFamily:'Poppins_600SemiBold',padding:10,fontSize:25}}>Next Matches</Text>
             <ScrollView style={{margin:10}} showsHorizontalScrollIndicator={false} horizontal={true}>
                 {filtredmatches?.map((match)=>{
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
                       <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>-</Text>
                       <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.fullTime.away}</Text> 
                        </View>
                        <View>
                            <Text>{match.utcDate.slice(0,10)}</Text>
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
             </View>
       }



                    <Text style={{fontFamily:'Poppins_600SemiBold',padding:10,fontSize:25}}>Matches</Text>
                    {matches?.map((match)=>{
                return(
                   <View key={match.id} style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                       <Text style={{color:Colors.main,fontFamily:'Poppins_400Regular'}}>{match.group ? match.group.replace(/_/g, " ") : match.stage.replace(/_/g, " ")}</Text>
                       <TouchableOpacity>
                       <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2,padding:30,marginVertical:10,alignContent:'center'}}>
                          <View  style={{flexDirection:'column',alignItems:'center'}}>
                          <Text style={{fontFamily:'Poppins_400Regular'}}>{match.homeTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.homeTeam.tla}</Text>
                          </View>
                           {match?.homeTeam?.crest?.indexOf('.svg') != -1 ? <SvgUri width="50"
                                    height="50"
                         uri={match?.homeTeam?.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match?.homeTeam?.crest}}></Image>
                       }
                           <View style={{flexDirection:'column',alignItems:'center',alignContent:'center'}}>
                               <View style={{flexDirection:'row',padding:10}}>
                               <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.penalties ? (match.score.fullTime.home - match.score.penalties.home) : match.score.fullTime.home}</Text>
                              <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>:</Text>
                              <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.penalties ? (match.score.fullTime.away - match.score.penalties.away) : match.score.fullTime.away}</Text>
                               </View>
                               {match.score.penalties && 
                                    <View style={{flexDirection:'row'}}>
                                         <Text style={{fontFamily:'Poppins_700Bold',fontSize:15}}>{match.score.penalties.home}</Text>
                                  <Text style={{fontFamily:'Poppins_700Bold',fontSize:15}}>:</Text>
                                  <Text style={{fontFamily:'Poppins_700Bold',fontSize:15}}>{match.score.penalties.away}</Text>
                                        </View>
                                    }
                           </View>
                           {match?.awayTeam?.crest?.indexOf('.svg') != -1 ? <SvgUri width="50"
                             height="50"
                         uri={match?.awayTeam?.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.awayTeam.crest}}></Image>
                       }
                           <View  style={{flexDirection:'column',alignItems:'center'}}>
                          <Text style={{fontFamily:'Poppins_400Regular'}}>  {match.awayTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.awayTeam.tla}</Text>
                          </View>  
                                                          <View>
                               </View>
                           </View>
                       </TouchableOpacity>
                       </View>
                )
           })}
                </View>
                }
            </ScrollView>
         );
     }
}
 
export default HomeAppWc;