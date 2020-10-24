import React  from "react";
import {StyleSheet, View, Text} from 'react-native'

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>About screen!</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#f98166',
        padding:24,
    
    },
    text:{
        padding:5,
       justifyContent:'center',
       fontWeight:'bold',
       textAlign:'center',
       fontSize:20,
       color:'#ffdb74'
    }
})