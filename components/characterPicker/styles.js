import { StyleSheet } from 'react-native'

export const characterPickerStyles = StyleSheet.create({
    wrapper: {
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'red',
        maxHeight: 300
    },
    header: {
        flex: 1,
        maxHeight: 80,
    }
})
