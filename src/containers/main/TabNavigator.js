import React from 'react'
import { Image,View, Text, TouchableOpacity } from 'react-native';
import images from 'res/images';
import colors from 'res/colors';
import palette from 'res/palette';
import MainScreen from './MainScreen';
import OtherScreen from './OtherScreen';
import HomeNavigator from './home/HomeNavigator';
import SeacrhNavigator from './search/SearchNavigator';
import AddPostNavigator from './addPost/AddPostNavigator';
import ProfileNavigator from './profile/ProfileNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Home = ()=>{
    return(
        <HomeNavigator/>
    )
}
const Search = ()=>{
    return(
        <SeacrhNavigator/>
    )
}
const AddPost = ()=>{
    return(
        <AddPostNavigator/>
    )
}
const Activity = ()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Activity" component={OtherScreen} />
    </Stack.Navigator>
    )
}
const Profile = ()=>{
    return(
    <ProfileNavigator/>
    )
}

const tabBarCOnfig=(props) =>({
    tabBarIcon: ({ focused }) => {
        const { route } = props;
        let icon;
        switch (route.name) {
          case 'Home': icon = focused ? images.home_selected : images.home; break;
          case 'Search': icon = focused ? images.search_selected : images.search; break;
          case 'AddPost': icon = focused ? images.add_selected : images.add; break;
          case 'Activity': icon = focused ? images.activity_selected : images.activity; break;
          case 'Profile': icon = focused ? images.profile_selected : images.profile; break;
          default: icon = focused ? images.home_selected : images.home; break;
        }
        return <Image style={{ ...palette.header.image }} source={icon} />
      }
})
function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName= 'Home' tabBarOptions = {{showLabel: true,style: { backgroundColor: colors.tabBackground }}} >
          <Tab.Screen name="Home" component={Home} options ={props=>tabBarCOnfig({...props})}/>
          <Tab.Screen name="Search" component={Search} options ={props=>tabBarCOnfig({...props})}/>
          <Tab.Screen name="AddPost" component={AddPost} options ={props=>tabBarCOnfig({...props})}/>
          <Tab.Screen name="Activity" component={Activity} options ={props=>tabBarCOnfig({...props})}/>
          <Tab.Screen name="Profile" component={Profile} options ={props=>tabBarCOnfig({...props})}/>
        </Tab.Navigator>
    );
  }

export default TabNavigator;
