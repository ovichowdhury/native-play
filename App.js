/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {addPlace, deletePlace, selectPlace, deSelectPlace} from './src/store/actions/places.action';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceDetails from './src/components/PlaceDetails';
import PlaceImage from './src/assets/place.jpg';

const App = () => {

    const places = useSelector((store) => store.places.places);
    const selectedPlace = useSelector((store) => store.places.selectedPlace);
    const dispatch = useDispatch();

    console.log(selectPlace);

    onPlaceAdd = (value) => {
        if(value.trim() === "") return;
        dispatch(addPlace(value, PlaceImage));
    }

    onDeletePlace = (key) => {
        dispatch(deletePlace(key));
    }

    onPlaceSelect = (key) => {
        dispatch(selectPlace(key));
    }

    onModalClose = () => {
        dispatch(deSelectPlace())
    }

    

    return (
        <>
            <View style={styles.container}>
                <PlaceDetails selectedPlace={selectedPlace} onModalClose={onModalClose} onPlaceDelete={onDeletePlace}/>
                <PlaceInput onPlaceAdd={onPlaceAdd}/>
                {/* Place List */}
                <PlaceList places={places} onItemPress={onPlaceSelect}/>        

            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    }
});



export default App;
