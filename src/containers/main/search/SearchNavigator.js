import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import images from 'res/images';
import SearchScreen from './SearchScreen';
import palette from 'res/palette';
import colors from 'res/colors';

const Stack = createStackNavigator();

const navSearchOption = {

    navigationOptions: ({ navigation }) => ({
      ...palette.header,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <Image style={styles.headerLeftImage} source={images.search_selected} />
          <Text style={styles.headerLeftText}>Ara</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image style={styles.headerRightImage} source={images.qr_code} />
          </TouchableOpacity>
        </View>
      ),
    })
};

    const SearchNavigator = () => {
        return(
            <Stack.Navigator initialRouteName="Search" screenOptions={{headerTitle:null}}>
                <Stack.Screen name="Search" component={SearchScreen} options={navSearchOption.navigationOptions}/>
            </Stack.Navigator>
        )
    }
const styles = StyleSheet.create({
  headerLeftContainer: { ...palette.header.headerLeftContainer },
  headerLeftImage: {...palette.header.image},
  headerRightContainer: { ...palette.header.headerRightContainer },
  headerRightImage: {...palette.header.image},
  headerLeftText: { color: colors.textFaded1, marginLeft: 10, fontSize: 18 },
});

export default SearchNavigator;