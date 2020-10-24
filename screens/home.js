import React  from "react";
import {StyleSheet, View, Text} from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home screen🏚</Text>
        </View>
    )
}

const styles=StyleSheet.create({
     container:{
         backgroundColor:'#ffb56f',
         padding:24,
     
     },
     text:{
         padding:5,
        justifyContent:'center',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        color:'#df5f67'
     }
})