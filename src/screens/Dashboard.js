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
import {addPlace, deletePlace, selectPlace, deSelectPlace} from '../store/actions/places.action';

import PlaceInput from '../components/PlaceInput';
import PlaceList from '../components/PlaceList';
import PlaceDetails from '../components/PlaceDetails';
import PlaceImage from '../assets/place.jpg';

const Dashboard = (props) => {

    const places = useSelector((store) => store.places.places);
    const selectedPlace = useSelector((store) => store.places.selectedPlace);
    const dispatch = useDispatch();

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



export default Dashboard;
