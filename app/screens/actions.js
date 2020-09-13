import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Switch, KeyboardAvoidingView} from 'react-native';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';
import CountDown from 'react-native-countdown-component';

import SongList from "../components/songList";
import { TextInput } from 'react-native-gesture-handler';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Actions extends React.Component  {
 

state = {
  fontsLoaded: false,
  playing: false,
  switchValue: false,
  switch: 'Off',
  time: 10,
  uv: false,
  
};

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    
    
  }

  
  getData() {
    return  [
    {
      
    name:"Gloves",
    
    artist:"10 mins",
  },
  {
    
    name:"Mask",
  
    artist:"15 mins",
  },
  {
    
    name:"Mail",
 
    artist:"20 mins",
  },
  {
    
    name:"Raincoat",
   
    artist:"10 mins",
  },
  ]
  }

  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
      if(this.state.switchValue==false){
      this.setState({switch: 'On'})
      }
      else if(this.state.switchValue==true){
        this.setState({switch: 'Off'})
        }
      //state changes according to switch
      //which will result in re-render the text
   }
   toggleMethod = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({uv: value})
    if(this.state.uv==false){
    this.setState({switch: 'On'})
    }
    else if(this.state.switchValue==true){
      this.setState({switch: 'Off'})
      }
    //state changes according to switch
    //which will result in re-render the text
 }

  render(){
    const { timer, switchVal } = this.props.route.params;
    
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      
      <View style={styles.playing}>
   
          <View style={{marginTop:'5%'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'5%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaH'}}>Status</Text>
            <View style={{flex:1, flexDirection:'column', position:'absolute', zIndex:3, top:'110%', alignSelf:'center'}}
           ><Text style={{position:'relative',fontSize:20,marginTop:'5%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaL'}}>Power: {this.state.switch}</Text>
           {this.state.switchValue &&
           <View><Text style={{position:'relative',fontSize:20,marginTop:'10%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaL'}}>Timer</Text>
           <CountDown
            until={parseInt(timer)*60}
            onFinish={() => alert('Sanitization complete.')}
            onPress={() => alert('Sanitron is busy killing germs')}
            size={20}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: '#6C63FF'}}
           timeToShow={['M', 'S']}
          /></View>
           }
           {!this.state.switchValue &&
           <View>
           <Image source={require('../assets/sleep.png')} style={styles.middle}></Image>
           <Text style={{position:'relative',fontSize:15,marginTop:'5%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaH'}}>Add Preset </Text>
           <TextInput placeholder={'Timer settings'} style={{textAlign:'center',marginTop:'0%',}}></TextInput></View>}

           <TextInput placeholder={'Enter a name'} style={{textAlign:'center',marginTop:'0%',}}></TextInput>
           <Text style={{position:'relative',fontSize:15,marginTop:'4%',textAlign:'center', color:'#FFF', fontFamily:'FuturaH', backgroundColor:'#765BFF', alignSelf:'center',padding:'2%',paddingLeft:'10%', width:200,height:30,borderRadius:10,textAlign:'center', textAlignVertical:'center'}}>Save as preset</Text>
           </View>
          </View>
</View>


      <Text style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'10%', textAlign:'left', color:'#364f6b', fontFamily:'FuturaH'}}>Settings</Text>
      <View style={{flex:1, flexDirection:'row', position:'absolute', zIndex:3, top:'57%', alignSelf:'center', backgroundColor:'#6C63FF', padding:'5%', borderRadius:10}}>
        <Text style={{position:'relative',fontSize:20,marginTop:'0%',marginLeft:'5%',textAlign:'left', fontFamily:'FuturaL', color:'#FFF'}}>Timer</Text>
           <TextInput placeholder={timer} style={{marginLeft:'5%',marginTop:'-1%',}}></TextInput>
           
           <Text style={{position:'relative',fontSize:15,marginTop:'2%',marginLeft:'5%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL'}}>UV</Text>
           <Switch
          style={{width:50}}
          onValueChange = {this.toggleMethod}
           trackColor = {'#FFF'}
           thumbColor = {'#FFF'}
          value = {this.state.uv}/>
           <Text style={{position:'relative',fontSize:15,marginTop:'2%',marginLeft:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL'}}>Wet</Text>
           
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',marginLeft:'5%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL'}}>Power</Text>
           <Switch
          style={{width:50}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>


          </View>
          


<Text style={{position:'relative',fontSize:20,marginTop:'25%',marginLeft:'10%', textAlign:'left', color:'#364f6b', fontFamily:'FuturaH'}}>Presets</Text>
      <ScrollView style={styles.scrollcontainer}>
      <SongList itemList={this.getData()}/>
      </ScrollView>
      
      
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}



const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#f5f5f5'
  },
  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'1%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
  album:{
    height:'40%',
    width:'50%',
    marginTop:'7.5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
    borderRadius:10,
  },
  spotify:{
    height:'100%',
    width:'8%',
    marginTop:'7.5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
    marginLeft:'2%',
  },
  playing:{
      width:'70%',
      height:'40%',
      elevation:1,
      backgroundColor:'#FFF',
      alignSelf:'center',
      marginTop:'15%',
      borderRadius:20
  },
  scrollcontainer:{
    marginTop:'2%'
  }
  
});