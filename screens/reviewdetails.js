import React  from "react";
import {StyleSheet, View, Text, Image} from 'react-native'
import Card from '../shared/card'
import {images} from '../styles/global'

export default function ReviewDetails({navigation}){ //because we've used Reviewdetails in the navigation-stack, it gets the navigation prop.

const rating=navigation.getParam('rating')

    return(
        <View style={styles.container}>
            {/* inorder to get the object from the home page, we need to use navigation.getParam() method. */}
          <Card>
              {/*this being sent as a prop to the card component*/}
            <Text>{navigation.getParam('title')}</Text>   
            <Text>{navigation.getParam('body')}</Text>  
            <View style={styles.rating}>
                <Text>Game Zone rating: </Text>
                {/* this is to dynamically set the rating images, depending on the rating. */}
                <Image source={images.ratings[rating]}/>
            </View>
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
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#ffb56f'
    }
})
