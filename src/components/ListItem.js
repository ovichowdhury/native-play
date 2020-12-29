import React from 'react';
import { View, TouchableOpacity, Text, Image,StyleSheet } from 'react-native';

export default function ListItem(props) {
    return (
        <>
            <TouchableOpacity onPress={props.onItemPress}>
                <View style={styles.listItem}>
                    <Image source={props.placeImage} style={styles.placeImage}/>
                    <Text>{props.placeName}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#eee',
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        width: 40,
        height: 30,
        marginRight: 10
    }

});