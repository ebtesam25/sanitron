import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Song({ route,name,album, artist}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
         <Image source={require('../assets/settings.png')} style={styles.photo} />
        <View style={styles.fishdeets}>  
        <Text style={styles.name} onPress={setSan(artist)}>{name}</Text>
       
            <Text style={styles.description}>
                {artist}
            </Text>
         
        </View>
        <Image source={require('../assets/use.png')} style={styles.spotify}></Image>
        
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
       flexDirection:'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation:1,
        alignSelf:'center',
        justifyContent:'center',
        width:'90%',
        
    },
    name: {
        fontSize: 20,
        color: '#000',
        fontFamily:'FuturaH',
        marginTop: '-5%',
        textAlignVertical:'center',
    },
     photo: {
        height: 50,
        width: 50,
        justifyContent:'center',
        paddingHorizontal:'10%',
        borderRadius:30,
        marginTop:'2%',
        resizeMode:'contain'
        
    },
    fishdeets: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30,
        marginTop:20,
        marginRight: 30,
        justifyContent: 'center',
        
    },
    spotify:{
        position:'absolute',
        marginTop:'5%',
        resizeMode:'contain',
        right:'5%',
        width:30,
        height:30,
    },
    description: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#6C63FF'
    },
   deets:{
       borderRadius:30,
       fontFamily:'FuturaH',
       elevation:2,
       backgroundColor:'#379DA6',
       color:'#FFF',
       fontSize:15,
       padding:'5%',
       textAlign:'center',
       width:'50%',
       left:'22.5%',
       marginTop:'5%',
       marginBottom:'7.5%',
   }
});