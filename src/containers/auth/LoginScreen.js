import React from 'react'
import { View, Text, Button } from 'react-native'
import palette from 'res/palette';

const LoginScreen = (props) => {

    const _signInAsync = async () => { props.navigation.navigate('Tab') };

    return (
      <View style={palette.container.center}> 
        <Button title="Giriş yap" onPress={_signInAsync} />
      </View>
    );
}


export default LoginScreen;

