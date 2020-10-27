import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewdetails'
import About from '../screens/about'
import React from 'react' //importing react, to render the header component in place of the title.
import Header from '../shared/header'

//creating a screen object and passing it as a parameter for the stack. {createStackNavigator}
const screens= {
    //configuring the first defaul screen to be displayed, no naming constraints.
    Home:{
        screen:Home,
        //using a function to use headerTitle, as JSX so that navigation can be destructured and sent as a prop to header.js component.
        navigationOptions:({navigation})=>{
            return{ 
                    headerTitle:()=><Header navigation={navigation}/> //replacing title w headerTitle, because headertitle can take a function.
                    // headerStyle:{
                    //     backgroundColor:'#ffb56f'
                    // } 
            }
        } //configuring the home component to be the route for the Home screen.
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Review Details. 📝',
            // headerStyle:{
            //     backgroundColor:'#df5f67',
            // }
        }
    },
    About:{
        screen:About,

         navigationOptions:{
            //  headerLeft:null
        //     headerTitle:()=><Header/>,
         
        }

    }
    
}

//need to wrap this in our Appcontainer.
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{ //this option will set the default 
        //options for the pages, unless its overridden by defining in the individual options.
        headerTintColor:'#df5f67',
        headerStyle:{
            backgroundColor:'#ffb56f', height:60, 
        }
    }
})

//basically, this will contain all the info about the routing.
export default HomeStack
