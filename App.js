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


import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceDetails from './src/components/PlaceDetails';
import PlaceImage from './src/assets/place.jpg';

const App = () => {
    
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);

    onPlaceAdd = (value) => {
        if(value.trim() === "") return;
        setPlaces([...places, {key: Math.random().toString(), value: value, image: PlaceImage}]);
    }

    deletePlace = (key) => {
        setPlaces(places.filter((p, i) => {
            return p.key !== key;
        }));
        setSelectedPlace(null);
    }

    onPlaceSelect = (key) => {
        const sPlace = places.find((place) => {
            return place.key === key
        });
        setSelectedPlace(sPlace);
    }

    onModalClose = () => {
        setSelectedPlace(null);
    }

    

    return (
        <>
            <View style={styles.container}>
                <PlaceDetails selectedPlace={selectedPlace} onModalClose={onModalClose} onPlaceDelete={deletePlace}/>
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
