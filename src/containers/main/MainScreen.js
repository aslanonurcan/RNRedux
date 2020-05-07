import React from 'react'
import { View, Text, Button } from 'react-native'

import palette from 'res/palette';

const MainScreen = (props) => {
  const _signOutAsync = async () => props.navigation.navigate('Login');
  const _otherScreen = async () => props.navigation.navigate('Other');
  return (
    <View style={palette.container.center}>
      <Button title="Çıkış Yap" onPress={_signOutAsync} />
      <Button title="Diğer ekran" onPress={_otherScreen} />
    </View>
  );
}

export default MainScreen;
