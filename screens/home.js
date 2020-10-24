import React  from "react";
import {StyleSheet, View, Text, Button} from 'react-native'

export default function Home({navigation}){

    //every component assigned a screen, automatically gets assigned a navigation prop to it.
    const presshandler=()=>{
        navigation.navigate('ReviewDetails')//reactnative will look at this and find this property in the homeStack.js file, and navigate to that file.
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home screen🏚</Text>
            <Button title='Go to review.📝'onPress={presshandler}/>
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