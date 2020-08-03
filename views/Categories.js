import React, { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native'
import { css } from '../assets/css/Css'
import { SafeAreaView } from 'react-native-safe-area-context';


const Categories = ({ navigation }) => {
    const [foods, setFoods] = useState()

    const getFood = async () => {
        const response = await fetch('https://taco-food-api.herokuapp.com/api/v1/category')
        const categoryFoods = await response.json()
        setFoods(categoryFoods)
    }

    return (
        <SafeAreaView style={css.safeAreaAndroid}>
            <Text style={css.bigTitle}>Categorias</Text>

            <ScrollView>
                {
                    foods &&
                    foods.map((item, index) => (
                        <View key={index} style={css.list}>
                            <Button
                                color='#218c74'
                                title={item.category}
                                onPress={() => navigation.navigate('Foods', {
                                    id: item.id,
                                    category: item.category
                                })}
                            />
                        </View>
                    ))
                }
                <View style={css.cleanBtn}>
                    {
                        foods !== null && (
                            <Button
                                title='Buscar Categorias'
                                onPress={() => getFood()}
                            />
                        )
                    }
                    <Button
                        title='Home'
                        onPress={() => navigation.navigate('Home', {
                            name: 'Robson'
                        })}
                    />
                    <Button
                        title='Voltar'
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Categories