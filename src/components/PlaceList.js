import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

export default function PlaceList(props) {



    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => {
                return (
                    <ListItem
                        placeName={info.item.value}
                        placeImage={info.item.image}
                        onItemPress={() => props.onItemPress(info.item.key)}
                    />
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        padding: 10
    }
});