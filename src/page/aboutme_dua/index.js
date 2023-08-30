import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { meBotLogo } from '../../assets'
import colors from '../../utils/colors'

const Aboutme_dua = ({navigation}) => {
  return (
 <View style={styles.container}>
    <Image source={meBotLogo} style={{position:'absolute', height:600, width:500, alignItems:'center', marginTop:'100%', opacity:0.1}}/>
    <ScrollView>
     <View style={{
        alignItems:'center',
        padding:10,

     }}>
        <Image style={{height:200, width:200, }} source={meBotLogo}/>
     </View>

    <View style={{
        alignItems:'center',
        padding:10,
        }}>
        <View style={{
            backgroundColor:'white',
            padding:10,
            width:'100%',
            borderTopLeftRadius:10,
            borderBottomRightRadius:10,

            
        }}>
            <Text style={{
                fontFamily:'Poppins-Regular',
                fontSize:15,
                textAlign:'justify',
            
        }}>
            1. <Text style={{fontWeight:'bold'}}>Penyaringan Pesan: </Text> Bot moderasi dapat memeriksa pesan yang dikirimkan oleh anggota server dan menghapus pesan yang mengandung konten yang tidak pantas, spam, atau kata-kata kasar.{'\n'}
            {'\n'}
            2. <Text style={{fontWeight:'bold'}}>Pemberian Peran Otomatis: </Text> Bot dapat memberikan peran otomatis kepada anggota baru berdasarkan kriteria tertentu, seperti waktu bergabung atau pesan tertentu yang telah mereka kirimkan.
            </Text>
        </View>

    </View>
    <View style={{
        padding:10,

    }}>
    <TouchableOpacity onPress={() => navigation.navigate('Aboutme_tiga')} style={{
            alignItems:'flex-start',
            padding:10,
            backgroundColor:colors.secondary,
            borderRadius:5,
            
            
        }}>
            <Text style={{
                fontFamily:'Poppins-SemiBold',
                color:'white',
                
            
            }}>Selanjutnya</Text>
    </TouchableOpacity>
    </View>

     </ScrollView>
     <Text style={{
        textAlign:'center',
        fontSize:12,
        fontFamily:'Poppins-Regular',
        color:'white',
        top:-10,
     }}>Appliaction & Bot by : @fdhlan.21</Text>
    </View>
  )
}

  


export default Aboutme_dua

const styles = StyleSheet.create({
        container:{
        backgroundColor:colors.primary,
        flex:1,
        
    }
})