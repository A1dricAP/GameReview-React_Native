import React  from "react";
import {StyleSheet, View, Text, Button} from 'react-native'

export default function ReviewDetails({navigation}){ //because we've used Reviewdetails in the navigation-stack, it gets the navigation prop.

    const presshandler=()=>{
        navigation.navigate('About')//reactnative will look at this and find this property in the homeStack.js file, and navigate to that file.
    }

    const presshandler1=()=>{
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>ReviewDetails screen!</Text>
            <Button title='Go to about.📝'onPress={presshandler}/>
            <Button title='Home' onPress={presshandler1}/>
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
