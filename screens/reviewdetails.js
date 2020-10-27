import React  from "react";
import {StyleSheet, View, Text, Button} from 'react-native'
import Card from '../shared/card'

export default function ReviewDetails({navigation}){ //because we've used Reviewdetails in the navigation-stack, it gets the navigation prop.


    return(
        <View style={styles.container}>
            {/* inorder to get the object from the home page, we need to use navigation.getParam() method. */}
          <Card>
              {/*this being sent as a prop to the card component*/}
            <Text style={styles.text}>{navigation.getParam('title')}</Text>   
            <Text style={styles.text}>{navigation.getParam('body')}</Text>  
            <Text style={styles.text}>{navigation.getParam('rating')}</Text>
        </Card>  
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // backgroundColor:'#df5f67',
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
