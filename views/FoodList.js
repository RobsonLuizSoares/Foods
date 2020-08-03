import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import foodsApi from '../apis/Foods'
import FoodInfo from '../components/FoodInfo';
import { css } from '../assets/css/Css';


const FoodList = ({ navigation, route }) => {

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
            <Text style={css.bigTitle}>Confira os nutrientes </Text>
            <View>

                <FlatList data={foodInfo}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({ item }) => {
                        return <FoodInfo item={item} />
                    }}
                />
            </View>
        </View>
    )
}

export default FoodList