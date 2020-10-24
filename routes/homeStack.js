import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewdetails'

//creating a screen object and passing it as a parameter for the stack. {createStackNavigator}
const screens= {
    //configuring the first defaul screen to be displayed, no naming constraints.
    Home:{
        screen:Home //configuring the home component to be the route for the Home screen.
    },
    ReviewDetails:{
        screen:ReviewDetails
    }
    
}

//need to wrap this in our Appcontainer.
const HomeStack = createStackNavigator(screens)

//basically, this will contain all the info about the routing.
export default createAppContainer(HomeStack)
