import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Song from './song';
import {setSan} from '../screens/actions';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const SongList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <Song
                    name={item.name}
                    
                    artist={item.artist} 
                    
                    
                />}
            />

    </View>
);

export default SongList;