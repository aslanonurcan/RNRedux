import React from 'react';
import { View, Text, Platform, Image, TouchableOpacity  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import OtherScreen from '../OtherScreen';
import ProfileDrawer from './ProfileDrawer';
import images from 'res/images';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const navProfilScreen = {
          navigationOptions: ({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#222',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
            },
            headerLeft: () => (
              <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#fff', marginLeft: 10, fontSize: 18, fontWeight: 'bold' }} >ozaferayan</Text>
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={images.menu} />
                </TouchableOpacity>
              </View>
            )
          }),
  };

const navOtherScreen = {
        navigationOptions:() => ({
          drawerLabel: "Demo Screen 1"
      })
}
  const navigatorConfig = {
    drawerPosition: 'right',
    drawerType: 'slide',
    drawerContent: ProfileDrawer,
  }
  const StackProfile = ()=>{
      return(
      <Stack.Navigator >
          <Stack.Screen name="Profile" component={ProfileScreen} options={navProfilScreen.navigationOptions}/>
      </Stack.Navigator>
      )
  }
const ProfileNavigator = () => {
    return(
        <Drawer.Navigator {...navigatorConfig}>
            <Drawer.Screen name="StackProfile" component={StackProfile} />
            <Drawer.Screen name="Archive" component={OtherScreen} options={navOtherScreen}/>
        </Drawer.Navigator>
    )
}
  export default ProfileNavigator;