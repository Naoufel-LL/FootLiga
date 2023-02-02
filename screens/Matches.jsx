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

const Matches = ({navigation,route}) => {
    const [loading,setLoading] = useState(false)
    const [matches,setMatches] =useState([])
    const [matchday,setMatchDay] = useState()
    const getLeague = async () => {
      // get Data from Storage
      try {
        const data = await AsyncStorage.getItem("league");
        if (data !== null) {
          console.log(data);
          const url = `http://api.football-data.org/v4/competitions/${data}/matches`
      const url1 = `http://api.football-data.org/v4/competitions/${data}`
      axios.get(url,config).then((res)=>{
        setMatches(res.data)
        setLoading(true)
  })
  axios.get(url1,config).then((res)=>{
          setMatchDay(res.data.currentSeason.currentMatchday)
          console.log(res.data.currentSeason.currentMatchday)
          setLoading(true)
  })
        }
      } catch (error) {
        console.log(error);
      }
    };
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
    const config ={ headers : {'X-Auth-Token':'c679b245629747a6a47075479ac4f00e'}}
    useEffect(()=>{
      getLeague()
    },[])
   let filtredMatches = matches?.matches?.filter((match)=>{
      return match.matchday == matchday
   })
   console.log(filtredMatches)
    if(fontsLoaded){
        return (
            <ScrollView  style={{marginVertical:30}}>             
                {!loading ? <ActivityIndicator size={30} color={Colors.main}></ActivityIndicator> : 
                <SafeAreaView>
                   <ScrollView>
                 {matches.matches && <View style={{width:'100%',alignContent:'center',alignItems:'center'}}>
                 <View style={{backgroundColor:Colors.main,width:'90%',borderRadius:10,justifyContent:'center',alignItems:'center',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,padding:0,marginVertical:10}}>
           <Image style={{width:180,height:110}} resizeMode='contain' source={{uri:matches?.competition?.emblem}}></Image>
           
           </View>
                 </View>}
                 <View>
                    <ScrollView style={{margin:10}} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {filtredMatches?.map((match)=>{
                              return(
                                <View style={{width:400,height:200}}>
                                    <TouchableOpacity>
                                    <View style={{flexDirection:'row',width:'90%',justifyContent:"space-around",alignItems:'center',backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,padding:30,marginVertical:10,alignContent:'center'}}>
                          <View  style={{flexDirection:'column',alignItems:'center'}}>
                          {match.homeTeam.crest.indexOf('.svg') != -1 ? <SvgUri width="50"
                                    height="50"
                         uri={match.homeTeam.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.homeTeam.crest}}></Image>
                       }
                          <Text style={{fontFamily:'Poppins_400Regular',paddingVertical:10,fontSize:18}}>{match.homeTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.homeTeam.tla}</Text>
                          </View>
                           
                           <View style={{flexDirection:'column',alignItems:'center'}}>
                               <View style={{flexDirection:'row',paddingHorizontal:20}}>
                               <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.fullTime.home}</Text>
                              <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>-</Text>
                              <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.fullTime.away}</Text> 
                               </View>
                               <View>
                                   <Text>Week {match.matchday}</Text>
                               </View>
                           </View>
                           <View  style={{flexDirection:'column',alignItems:'center'}}>
                           {match.awayTeam.crest.indexOf('.svg') != -1 ? <SvgUri width="50"
                             height="50"
                         uri={match.awayTeam.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.awayTeam.crest}}></Image>
                       }
                          <Text style={{fontFamily:'Poppins_400Regular',paddingVertical:10,fontSize:18}}>{match.awayTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.awayTeam.tla}</Text>
                          </View>  
                          
                        
                           </View>
                                    </TouchableOpacity>
                               </View>
                              )
                        })}
                    </ScrollView>
                 </View>
                 <View style={{alignItems:'center',alignContent:'center',marginVertical:20}}>
                 <View style={{backgroundColor:Colors.main,width:'90%',padding:10,justifyContent:'center',alignItems:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,padding:20,marginVertical:10}}>
             <Text style={{color:Colors.back,fontFamily:'Poppins_600SemiBold',fontSize:17}}>All Matches </Text>
           </View>
                 </View>
               {matches?.matches?.map((match)=>{
                return(
                   <View key={match.id} style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                       <Text style={{color:Colors.main,fontFamily:'Poppins_400Regular'}}>{match.utcDate.slice(0,10)}</Text>
                       <TouchableOpacity>
                       <View style={{flexDirection:'row',width:'90%',justifyContent:'space-around',alignItems:'center',backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,padding:30,marginVertical:10,alignContent:'center'}}>
                          <View  style={{flexDirection:'column',alignItems:'center'}}>
                          <Text style={{fontFamily:'Poppins_400Regular'}}>{match.homeTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.homeTeam.tla}</Text>
                          </View>
                           {match.homeTeam.crest.indexOf('.svg') != -1 ? <SvgUri width="50"
                                    height="50"
                         uri={match.homeTeam.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.homeTeam.crest}}></Image>
                       }
                           <View style={{flexDirection:'column',alignItems:'center'}}>
                               <View style={{flexDirection:'row',padding:10}}>
                               <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.fullTime.home}</Text>
                              <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>-</Text>
                              <Text style={{fontFamily:'Poppins_700Bold',fontSize:20}}>{match.score.fullTime.away}</Text>
                               </View>
                               <View>
                                   <Text>Week {match.matchday}</Text>
                               </View>
                           </View>
                           <View  style={{flexDirection:'column',alignItems:'center'}}>
                          <Text style={{fontFamily:'Poppins_400Regular'}}>{match.awayTeam.shortName}</Text>
                          <Text style={{fontFamily:'Poppins_400Regular',color:Colors.main}}>{match.awayTeam.tla}</Text>
                          </View>  
                          {match.awayTeam.crest.indexOf('.svg') != -1 ? <SvgUri width="50"
                             height="50"
                         uri={match.awayTeam.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='contain' source={{uri:match.awayTeam.crest}}></Image>
                       }
                           
                           </View>
                       </TouchableOpacity>
                       </View>
                )
           })}
             </ScrollView>
                </SafeAreaView>
                }   
            </ScrollView>
          );
    }
}
 
import {View,Text,ScrollView,StyleSheet,TouchableOpacity,Image,ActivityIndicator,RefreshControl, SafeAreaView,} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
export default Matches;