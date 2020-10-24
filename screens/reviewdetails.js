import React  from "react";
import {StyleSheet, View, Text} from 'react-native'

export default function ReviewDetails(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ReviewDetails screen!</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#df5f67',
        padding:24,
    
    },
    text:{
        padding:5,
       justifyContent:'center',
       fontWeight:'bold',
       textAlign:'center',
       fontSize:20,
       color:'#ffb56f'
    }
})