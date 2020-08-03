import React from 'react'
import { StyleSheet, Platform } from 'react-native'

const css = StyleSheet.create({
    safeAreaAndroid: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 25
    },
    header: {
        paddingVertical: 30,
        flex: 1,
        backgroundColor: '#9bc1bc'
    },
    container: {
        flex: 2,
        backgroundColor: '#84a98c',
    },
    bigTitle: {
        backgroundColor: '#fff',
        //marginTop: 30,
        paddingVertical: 10,
        marginBottom: 1,
        fontSize: 35,
        textAlign: 'center',
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    subTitle: {
        backgroundColor: '#118ab2',
        marginTop: 0,
        paddingVertical: 10,
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        paddingHorizontal: 10
    },
    subTitle2: {
        backgroundColor: '#118ab2',
        marginTop: 5,
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        marginHorizontal: 20
    },
    textNormal: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: "center"
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 2
    },
    boldCenter: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 20,
        letterSpacing: 2
    },
    home: {
        marginVertical: 15
    },
    getBtn: {
        marginHorizontal: 30,
        marginVertical: 5
    },
    cleanBtn: {
        marginBottom: 0,
        marginHorizontal: 30,
        marginTop: 5,
        padding: 15
    },
    listView: {
        marginTop: 10,
        marginBottom: 15,
        flex: 3,

    },
    list: {
        marginTop: 10,
        padding: 10,
        fontSize: 18,
        color: '#fff',
        marginHorizontal: 25,
        textAlign: 'center',

    },
    imageView: {
        margin: 5,
        alignContent: "center",
        alignItems: "center"
    },
    image: {
        justifyContent: 'center',
        height: 200,
        resizeMode: "contain",
        paddingHorizontal: 15,
        marginBottom: 5
    }
})

export { css }