import React from 'react'
import { Text, View, Button, ImageBackground } from 'react-native'
import { css } from '../assets/css/Css'


const Home = ({ navigation }) => {
    return (
        <View>
            <Text style={css.bigTitle}>Home</Text>
            <View style={css.home}>
                <Text style={css.textNormal}>O NUTRIENTE QUE VOCÊ</Text><Text style={css.boldCenter}>PRECISA</Text>
                <Text style={css.textNormal}>NO ALIMENTO QUE VOCÊ</Text><Text style={css.boldCenter}>GOSTA</Text>
            </View>
            <ImageBackground
                style={css.image}
                source={require('../assets/img/bg2.png')}
            />
            <View style={css.cleanBtn}>
                <Button
                    title='Buscar Categorias de alimentos'
                    onPress={() => navigation.navigate('Categories', {
                        name: 'Robson'
                    })}
                />
                <Button
                    color='#ccc'
                    title='Sobre'
                    onPress={() => navigation.navigate('About', {
                        name: 'Robson'
                    })}
                />
            </View>
        </View>
    )
}

export default Home