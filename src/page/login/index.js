import React, { useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { meBotLogo } from '../../assets'
import colors from '../../utils/colors'
import { LoginURL, MYAPP, storeData } from '../../config'
import axios from 'axios'

const LoginScreen = ({navigation}) => {

const [form, setForm] = useState({
    email:'',
    password:'',
})

const handleLogin = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((form.email.length == 0 ) | (form.password.length == 0)) {
        Alert.alert(MYAPP, "Semua Feild Harus di Isi!")
    } else if (reg.test(form.email) === false){
    Alert.alert(MYAPP, "Maaf, Format Email Tidak Benar!")
    } else if (form.password.length <3) {
        Alert.alert(MYAPP, "Password Terlalu Pendek!")
    } else {
        console.log(form);
        axios
        .post(LoginURL, form)
        .then(response => {
            console.log(response.data);
            if (response.data == 212) {
                console.log(response.data);
                Alert.alert(MYAPP, "Maaf Email / Password Salah!")
            } else {
                console.log(response.data);
                storeData('user', response.data);
                navigation.replace("HomeScreen");
                Alert.alert(MYAPP, "Berhasil Login Yes!")
            }
        })
        .catch(error => {
            console.error(error);
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
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20, textAlign:'center'}}>Login</Text>
    </View>

        <View style={{

        padding:10,
        backgroundColor:'white',
        margin:10,
        borderRadius:5,
        }}>
                <Text style={{fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Login Account</Text>

                <View style={{
                    padding:10,
                }}>
                    <Text style={{fontFamily:'Poppins-Regular', }}>Email</Text>
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

                    <TouchableOpacity onPress={handleLogin} style={{
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
                            
                        }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{marginTop:5, }}>
                        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, }}>Belum punya akun?daftar</Text>
                    </TouchableOpacity>

                </View>

    </View>
    </ScrollView>
    </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})