import React from 'react'
import { Text, View, Button, Image } from 'react-native'
import { css } from '../assets/css/Css'




const About = ({ route, navigation }) => {
    const { name } = route.params
    return (
        <View>
            <Text style={css.subTitle2}>Minha querida Lya</Text>
            <Image
                style={css.image}
                source={require('../assets/img/lya.png')}
            />
            <Text style={css.textNormal}> App para busca de informações nutricionais</Text>
            <Text style={css.textNormal}>App feito por {name}</Text>
            <View style={css.cleanBtn}>
                <Button
                    title='Home'
                    onPress={() => navigation.navigate('Home')} />
            </View>
            <View style={css.cleanBtn}>
                <Button
                    title='Categorias'
                    onPress={() => navigation.navigate('Categories', {
                        name: 'Robson'
                    })}
                />
            </View>
        </View>
    )
}

export default About