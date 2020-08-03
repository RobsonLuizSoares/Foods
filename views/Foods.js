import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native'
import { css } from '../assets/css/Css'
import foodsApi from '../apis/Foods'


const Foods = ({ navigation, route }) => {
    const [food, setFood] = useState([])

    useEffect(() => {
        foodsCategory()
    }, [])

    const foodsCategory = async () => {
        const { id } = route.params
        const response = await foodsApi.get(`category/${id}/food`)

        setFood(response.data)
    }

    return (
        <View>
            <View>
                <Text style={css.subTitle}>{route.params.category}</Text>
            </View>
            <ScrollView>
                {
                    food &&
                    food.map((item, index) => (
                        <View key={index} style={css.list}>

                            <Button
                                title={item.description}
                                color='#218c74'
                                onPress={() => navigation.navigate('FoodList', {
                                    id: item.id
                                })}
                            />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )


}

export default Foods