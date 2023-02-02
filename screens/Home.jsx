import React from "react";
import { useEffect,useState } from "react";
import {View,Text,ScrollView,StyleSheet,TouchableOpacity,Image,Modal} from "react-native"
import Colors from "../constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome'

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
const Home = ({navigation}) => {
   
   const [modal,setModal] = useState(false) 
   const [focused,setFocus] = useState()
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
        }
      } catch (error) {
        console.log(error);
      }
    };
     if(fontsLoaded){
      return(
         <ScrollView style={{backgroundColor:Colors.back,paddingVertical:'15%'}}>
         <View style={{alignItems:'center',padding:'3%'}}>
            <Text style={{fontFamily:'Poppins_700Bold',fontSize:30}}>Choose Your <Text style={{color:Colors.main}}>League</Text></Text>
         </View>
         <ScrollView style={{width:'100%',height:'100%',marginVertical:'10%'}}>
         <View style={{flexDirection:'row',justifyContent:'center',flexWrap:'wrap'}}>
         <TouchableOpacity>
           <View style={{width:160,margin:15,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}} source={require('../assets/leagues/qatar.png')}></Image>
            </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={{width:160,margin:15,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}} source={require('../assets/leagues/CL.png')}></Image>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{setModal(true);setFocus(3);console.log(focused);AsyncStorage.setItem("league","PL");getLeague()}}>
           <View style={{width:160,borderColor: focused == 3 ? Colors.main : '#fff',borderWidth:5,margin:15,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}} source={require('../assets/leagues/PL.png')}></Image>
            </View>
           </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setModal(true);setFocus(4);console.log(focused);AsyncStorage.setItem("league","PD");getLeague()}}>
            <View style={{width:160,borderColor: focused == 4 ? Colors.main : '#fff',margin:15,borderWidth:5,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}}  source={require('../assets/leagues/PD.png')}></Image>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setModal(true);setFocus(5);console.log(focused);AsyncStorage.setItem("league","SA");getLeague()}}>
            <View style={{width:160,margin:15,borderColor: focused == 5 ? Colors.main : '#fff',borderWidth:5,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}}  source={require('../assets/leagues/SA.png')}></Image>
            </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>{setModal(true);setFocus(6);console.log(focused);AsyncStorage.setItem("league","BL1");getLeague()}}>
           <View style={{width:160,margin:15,borderColor: focused == 6 ? Colors.main : '#fff',borderWidth:5,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:100,height:140,padding:15}}  source={require('../assets/leagues/BL1.png')}></Image>
            </View>
           </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setModal(true);setFocus(7);console.log(focused);AsyncStorage.setItem("league","PPL");getLeague()}}>
            <View style={{width:160,margin:15,borderColor: focused == 7 ? Colors.main : '#fff',borderWidth:5,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}}  source={require('../assets/leagues/PPL.png')}></Image>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setModal(true);setFocus(8);console.log(focused);AsyncStorage.setItem("league","FL1");getLeague()}}>
            <View style={{width:160,margin:15,borderColor:focused == 8 ? Colors.main : '#fff',borderWidth:5,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}}  source={require('../assets/leagues/FL1.png')}></Image>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setModal(true);setFocus(9);console.log(focused);AsyncStorage.setItem("league","DED");getLeague()}}>
            <View style={{width:160,margin:15,borderColor:focused == 9 ? Colors.main : '#fff',borderWidth:5,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,alignItems:'center'}}>
               <Image resizeMode="contain" style={{width:110,height:140,padding:15}}  source={require('../assets/leagues/ED.png')}></Image>
            </View>
            </TouchableOpacity>
         </View>
         <Modal visible={modal} animationType="fade" transparent={true}>

                  <View  style={{height:'100%',justifyContent:'flex-end'}}>
                  <View style={{backgroundColor:'#fff',height:200,alignItems:'center',justifyContent:'center',borderTopLeftRadius:10,borderTopRightRadius:10,position:'relative'}}>
                   <TouchableOpacity onPress={()=>{setModal(false)}}  style={{position:'absolute',right:2,top:2}}> 
                   <FontAwesome name='close' size={35}></FontAwesome>
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={()=>navigation.navigate("HomeApp")}  style={{width:'70%',alignContent:'center',alignItems:'center',backgroundColor:Colors.main,paddingVertical:20,borderRadius:10}}>
                     <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,color:'#fff'}}>Choose League</Text>
                   </TouchableOpacity>
                  </View>
                  </View>
         </Modal>
         </ScrollView>
        </ScrollView>
      )
     }
}
const styles = StyleSheet.create({
     box : {width:100}
})
export default Home;