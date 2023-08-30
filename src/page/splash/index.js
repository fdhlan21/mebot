import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { meBotLogo } from '../../assets'
import colors from '../../utils/colors'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Aboutme_satu')
    }, 1200);
  },[])
  return (
    <View style={styles.container1}>
      <View style={{alignItems:'center', padding:10, marginTop:'50%'}}>
        <Image style={{height:200, width:200,}} source={meBotLogo}/>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:20, fontWeight:'bold', top:10, }}>meBot</Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  container1: {
    flex:1,
    backgroundColor: colors.primary
  }

})