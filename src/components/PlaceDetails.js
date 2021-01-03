import React from 'react';
import { Modal, View, Text, StyleSheet, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function PlaceDetails(props) {

    const getModalContent = () => {
        if (props.selectedPlace) {
            return (
                <View>
                    <Image source={props.selectedPlace.image} style={styles.placeImage} resizeMode='stretch' />
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
                    <View style={styles.buttonContainer}>
                        <Icon.Button backgroundColor="red" onPress={() => props.onPlaceDelete(props.selectedPlace.key)}  name="trash-outline">
                            Delete
                        </Icon.Button>
                        <Icon.Button backgroundColor="blue" title="Close" onPress={props.onModalClose}  name="close-circle-outline">
                            Close
                        </Icon.Button>
                        {/* <Icon name="trash-outline" size={30} color="#900" /> */}
                    </View>

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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    }
});
