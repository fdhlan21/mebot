import React, { useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { meBotLogo } from '../../assets'
import colors from '../../utils/colors'
import { MYAPP, storeData } from '../../config/local'
import axios from 'axios'
import { RegisterURL } from '../../config/local'

const RegitserScreen = ({navigation}) => {

const [form, setForm] = useState({
    username:'',
    email:'',
    password:'',
})

const handleRegister = () => {

if ((form.username.length == 0) | (form.email.length == 0) | (form.password.length == 0)) {
    Alert.alert(MYAPP, "Harap Semua Feild Sudah di Isi!");
} else if (form.username.length <6) {
    Alert.alert(MYAPP, "Username Tidak Boleh Kecil Dari 6 Karakter!");
} else if (form.password.length <3) {
    Alert.alert(MYAPP, "Password Terlalu Pendek!") 
} else {
   console.log(form)
   axios
   .post(RegisterURL, form)
   .then(response => {
    console.log(response.data)
    if (response.data == 212) {
        storeData('user', response.data);
        navigation.replace("Login");
        alert("BERHASIL MEMBUAT AKUN!")
    } else {
        alert("Email Sudah Terdaftar!")
    }
   })
   .catch(error => {
    console.log(error);
   })
}


}

    return (
    <View  style={{
        flex:1,
        backgroundColor:colors.primary,
    }}>
    <ScrollView>
        <View style={{
        alignItems:'center',
        padding:10,
    }}>
        <Image style={{
            height:200,
            width:200, }} source={meBotLogo} />
        </View>
        <View style={{padding:10}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20, textAlign:'center'}}>Register</Text>
    </View>

        <View style={{

        padding:10,
        backgroundColor:'white',
        margin:10,
        borderRadius:5,
        }}>
                <Text style={{fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Register Account</Text>

                <View style={{
                    padding:10,
                }}>

                    <Text style={{fontFamily:'Poppins-Regular', }}>Username</Text>
                    <TextInput style={{backgroundColor:'#F2F1F0',
                    borderRadius:5,
                    height:40,
                    paddingLeft:10,
                    paddingRight:10,
                    fontFamily:'Poppins-Regular',
                    fontSize:12,
                    color:'black',
                    borderWidth:0.5,
                    }} placeholder='Masukan Username . . .' placeholderTextColor='gray' value={form.username}
                    onChangeText={value => setForm({...form,username: value})}
                    />

                    <Text style={{fontFamily:'Poppins-Regular', marginTop:10, }}>Email</Text>
                    <TextInput style={{backgroundColor:'#F2F1F0',
                    borderRadius:5,
                    height:40,
                    paddingLeft:10,
                    paddingRight:10,
                    fontFamily:'Poppins-Regular',
                    fontSize:12,
                    color:'black',
                    borderWidth:0.5,
                    }} placeholder='Masukan Email . . .' placeholderTextColor='gray' value={form.email}
                    onChangeText={value => setForm({...form,email: value})}
                    />

                    <Text style={{
                        marginTop:10,
                        fontFamily:'Poppins-Regular',

                    }}>
                        Password
                    </Text>
                        <TextInput style={{backgroundColor:'#F2F1F0',
                    borderRadius:5,
                    height:40,
                    paddingLeft:10,
                    paddingRight:10,
                    fontFamily:'Poppins-Regular',
                    fontSize:12,
                    color:'black',
                    borderWidth:0.5,
                    }} secureTextEntry={true} placeholder='Masukan Password . . .' placeholderTextColor='gray' value={form.password}
                                            onChangeText={value => setForm({...form,password: value})}
                    />

                    <TouchableOpacity onPress={handleRegister} style={{
                        marginTop:10,
                        backgroundColor:colors.primary,
                        borderRadius:5,
                        padding:10,
                    }}>
                        <Text style={{
                            fontSize:12,
                            fontFamily:'Poppins-SemiBold',
                            color:'white',
                            textAlign:'center',
                            
                        }}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop:5,}}>
                        <Text style={{fontFamily:'Poppins-Regular'}}>Kembali</Text>
                    </TouchableOpacity>
                </View>

    </View>
    </ScrollView>
    </View>
    )
}

export default RegitserScreen

const styles = StyleSheet.create({})