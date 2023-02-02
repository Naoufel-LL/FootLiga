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

const HomeApp = ({navigation}) => {

     const [table,setTable] = useState([])
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
            const url = `http://api.football-data.org/v4/competitions/${data}/standings`
            const url1 = `http://api.football-data.org/v4/competitions/${data}/teams`
        axios.get(url,config).then((res)=>{
          setData(res.data)
          setTable(res.data.standings[0].table)
          setLoading(true)
          console.log(res.data.standings[0].table)
      })
      axios.get(url1,config).then((res)=>{
        setTeams(res.data.teams)
        console.log(teams)
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
     if(fontsLoaded){
        return ( 
            <ScrollView style={{marginTop:"10%"}}>
                {!loading ? <ActivityIndicator></ActivityIndicator>:
                <ScrollView>
                    <View style={{width:'100%'}}>
                    {data.competition.code == "PD" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/PDcover.jpg')}></Image>}
                    {data.competition.code == "WC" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/qatarcover.jpg')}></Image>}
                    {data.competition.code == "PL" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/PLcover.jpg')}></Image>}
                    {data.competition.code == "PPL" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/PPLcover.jpg')}></Image>}
                    {data.competition.code == "SA" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/SAcover.jpg')}></Image>}
                    {data.competition.code == "FL1" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/FL1cover.jpg')}></Image>}
                    {data.competition.code == "DED" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/DEDcover.jpg')}></Image>}
                    {data.competition.code == "CL" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/UEFAcover.jpg')}></Image>}
                    {data.competition.code == "BL1" &&  <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../assets/leagues/BL1cover.jpg')}></Image>}

                    </View>
                    <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Overview</Text>
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
            <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
            <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Placement</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Standing')}><Text style={{fontFamily:'Poppins_500Medium',fontSize:18,color:Colors.main}}>View All</Text></TouchableOpacity>
            </View>
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
            <DataTable.Row style={{borderWidth:0.2,backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}  key={table.id}>
        <DataTable.Cell><Text  style={{fontFamily:'Poppins_400Regular'}}>{table[0].position}</Text></DataTable.Cell>
        <DataTable.Cell style={{flex:2,}}><View style={{flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
        <View>{table[0].team.crest.indexOf('.svg') != -1 ? <SvgUri  width="30"
                             height="40"
                         uri={table[0].team.crest}></SvgUri> : <Image style={{width:30,height:30}} resizeMode='cover' source={{uri:table[0].team.crest}}></Image>
                       }</View><Text style={{paddingRight:3,fontFamily:'Poppins_400Regular'}}>{table[0].team.tla}</Text>
          </View> </DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[0].playedGames}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[0].won}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[0].draw}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[0].lost}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[0].points}</Text></DataTable.Cell>
        <DataTable.Cell><Text  style={{color: table[0].goalDifference > 0 ? '#00ab41' : '#f01e2c',fontFamily:'Poppins_400Regular'}}>{table[0].goalDifference}</Text></DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row style={{borderWidth:0.2,backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}  key={table.id}>
        <DataTable.Cell><Text  style={{fontFamily:'Poppins_400Regular'}}>{table[1].position}</Text></DataTable.Cell>
        <DataTable.Cell style={{flex:2,}}><View style={{flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
        <View>{table[1].team.crest.indexOf('.svg') != -1 ? <SvgUri  width="30"
                             height="40"
                         uri={table[1].team.crest}></SvgUri> : <Image style={{width:30,height:30}} resizeMode='cover' source={{uri:table[1].team.crest}}></Image>
                       }</View><Text style={{paddingRight:3,fontFamily:'Poppins_400Regular'}}>{table[1].team.tla}</Text>
          </View> </DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[1].playedGames}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[1].won}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[1].draw}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[1].lost}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[1].points}</Text></DataTable.Cell>
        <DataTable.Cell><Text  style={{color: table[1].goalDifference > 0 ? '#00ab41' : '#f01e2c',fontFamily:'Poppins_400Regular'}}>{table[1].goalDifference}</Text></DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row style={{borderWidth:0.2,backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}  key={table.id}>
        <DataTable.Cell><Text  style={{fontFamily:'Poppins_400Regular'}}>{table[2].position}</Text></DataTable.Cell>
        <DataTable.Cell style={{flex:2,}}><View style={{flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
        <View>{table[2].team.crest.indexOf('.svg') != -1 ? <SvgUri  width="30"
                             height="40"
                         uri={table[2].team.crest}></SvgUri> : <Image style={{width:30,height:30}} resizeMode='cover' source={{uri:table[2].team.crest}}></Image>
                       }</View><Text style={{paddingRight:3,fontFamily:'Poppins_400Regular'}}>{table[2].team.tla}</Text>
          </View> </DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[2].playedGames}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[2].won}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[2].draw}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[2].lost}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[2].points}</Text></DataTable.Cell>
        <DataTable.Cell><Text  style={{color: table[2].goalDifference > 0 ? '#00ab41' : '#f01e2c',fontFamily:'Poppins_400Regular'}}>{table[2].goalDifference}</Text></DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row style={{borderWidth:0.2,backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 2}}  key={table.id}>
        <DataTable.Cell><Text  style={{fontFamily:'Poppins_400Regular'}}>{table[3].position}</Text></DataTable.Cell>
        <DataTable.Cell style={{flex:2,}}><View style={{flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
        <View>{table[3].team.crest.indexOf('.svg') != -1 ? <SvgUri  width="30"
                             height="40"
                         uri={table[3].team.crest}></SvgUri> : <Image style={{width:30,height:30}} resizeMode='cover' source={{uri:table[3].team.crest}}></Image>
                       }</View><Text style={{paddingRight:3,fontFamily:'Poppins_400Regular'}}>{table[3].team.tla}</Text>
          </View> </DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[3].playedGames}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[3].won}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[3].draw}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[3].lost}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{fontFamily:'Poppins_400Regular'}}>{table[3].points}</Text></DataTable.Cell>
        <DataTable.Cell><Text  style={{color: table[3].goalDifference > 0 ? '#00ab41' : '#f01e2c',fontFamily:'Poppins_400Regular'}}>{table[3].goalDifference}</Text></DataTable.Cell>

      </DataTable.Row>
      
      </DataTable>
      <Text style={{fontFamily:'Poppins_700Bold',padding:10,fontSize:25}}>Teams</Text>
         <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',flexWrap:'wrap',justifyContent:'space-around'}}>
            {teams.map((team)=>{
                return(
                    <TouchableOpacity>
                        <View style={{width:160,height:110,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center',padding:20,margin:15,alignContent:'center',alignItems:'center'}}>
                         <View>{team.crest.indexOf('.svg') != -1 ? <SvgUri  width="50"
                             height="50"
                         uri={team.crest}></SvgUri> : <Image style={{width:50,height:50}} resizeMode='cover' source={{uri:team.crest}}></Image>
                       }</View>
                        <Text style={{fontFamily:'Poppins_400Regular',paddingVertical:10,fontSize:15,textAlign:'center',color:Colors.main}}>  
                          {team.shortName}
                        </Text>
                       </View>
                    </TouchableOpacity>
                )
            })}
         </View>
                    </ScrollView>
                }
            </ScrollView>
         );
     }
}
 
export default HomeApp;