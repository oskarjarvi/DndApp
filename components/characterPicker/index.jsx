import React, { useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, Text } from 'react-native';
import { characterPickerStyles } from './styles'
import { useSelector } from 'react-redux';
export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];
const CharacterPicker = (props) => {
    const user = useSelector((state) => state.user)

    const renderCharacterSlide = (item) => {
        return (
            <View style={characterPickerStyles.container}>
                <View style={characterPickerStyles.header}>
                    <Text>{item.item.title}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={characterPickerStyles.wrapper}>
            <Carousel
                renderItem={renderCharacterSlide} data={ENTRIES1} loop sliderWidth={700} itemWidth={300} sliderHeight={500} itemHeight={500} />
        </View>

    )
}

export default CharacterPicker