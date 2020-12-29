import React from 'react';
import { Modal, View, Text, StyleSheet, Button, Image } from 'react-native';


export default function PlaceDetails(props) {

    const getModalContent = () => {
        if(props.selectedPlace) {
            return (
                <View>
                    <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
                </View>
            )
        }
        return null;
    }

    return (
        <>
            <Modal
                animationType='slide'
                onRequestClose={props.onModalClose}
                visible={props.selectedPlace !== null}
            >
                <View style={styles.modalContainer}>
                    {getModalContent()}
                    <Button title="Delete" color="red" onPress={() => props.onPlaceDelete(props.selectedPlace.key)}/>
                    <Button title="Close" onPress={props.onModalClose}/>
                </View>

            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
});
