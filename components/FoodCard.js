import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import FoodInfo from './FoodInfo'

const { width, heigth } = Dimensions.get('window')


const FoodCard = ({ item, route }) => {

    const [foodInfo, setFoodInfo] = useState([])

    useEffect(() => {
        foodsInfo()
    }, [])

    const foodsInfo = async () => {
        const { id } = route.params
        const response = await foodsApi.get(`food/${id}`)

        setFoodInfo(response.data)
    }
    return (
        <View>

            <FlatList data={foodInfo}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return <FoodInfo item={item} />
                }}
            />
        </View>

    )
}
export default FoodCard