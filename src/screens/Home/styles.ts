import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'#131016',
     padding:24
   },
   eventName:{
     color:'#FFF',
     fontSize:24,
     fontWeight:'bold',
     marginTop:48
   },
   eventDate:{
     color:'#6B5B5B',
     fontSize:16,
     paddingTop:5,
   },
   input:{
      flex:1,
      height:56,
      backgroundColor:'#1f1e25',
      borderRadius:5,
      color:'#FFF',
      padding:16,
      marginRight:12,
      fontSize:16
   },
   buttonText:{
      color:'#fff',
      fontSize:24
   },
   button:{
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor: "#31CF67",
      alignItems:'center',
      justifyContent:'center',
   },
   form : {
      marginTop:24,
      marginBottom:42,
      width:'100%',
      flexDirection:'row'
   }

 });