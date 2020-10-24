import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/about'

//creating a screen object and passing it as a parameter for the stack. {createStackNavigator}
const screens= {
    //configuring the first defaul screen to be displayed, no naming constraints.
    About:{
        screen:About,
        navigationOptions:{
            title:'About GameZone',
            // headerStyle:{
            //     backgroundColor:'#ffb56f'
            // }
        } //configuring the home component to be the route for the Home screen.
    }
    
}

//need to wrap this in our Appcontainer.
const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{ //this option will set the default 
        //options for the pages, unless its overridden by defining in the individual options.
        headerTintColor:'#df5f67',
        headerStyle:{
            backgroundColor:'#ffb56f', height:60, 
        }
    }
})

//basically, this will contain all the info about the routing.
export default aboutStack
