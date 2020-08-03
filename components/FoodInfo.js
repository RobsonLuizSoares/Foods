import React from 'react'
import { View, ScrollView, Text, StyleSheet, Dimensions, SectionList } from 'react-native'
import { css } from '../assets/css/Css'


const { width, heigth } = Dimensions.get('window')


const FoodInfo = ({ item }) => {



    return (
        <ScrollView>
            <View style={styles.viewCard}>
                <View style={styles.header}>
                    <Text style={styles.title}> {item.description} </Text>
                </View>
                <Text style={styles.subTitle}>Informação Nutricional (porção de {item.base_qty}{item.base_unit})</Text>

                {item.attributes.energy && (
                    <Text style={styles.descriptions}><Text style={css.bold}> Calorias:</Text> {`${parseFloat(item.attributes.energy.kcal).toFixed(2)} kcal `}</Text>
                )
                }
                {item.attributes.carbohydrate && (
                    <Text style={styles.descriptions}><Text style={css.bold}> Carboidratos:</Text> {`${parseFloat(item.attributes.carbohydrate.qty).toFixed(2)} / ${item.attributes.carbohydrate.unit}`}</Text>
                )
                }
                {item.attributes.protein &&
                    (
                        <Text style={styles.descriptions}><Text style={css.bold}> Proteínas:</Text> {`${parseFloat(item.attributes.protein.qty).toFixed(2)} / ${item.attributes.protein.unit}`}  </Text>
                    )
                }
                {item.attributes.lipid &&
                    (
                        <Text style={styles.descriptions}> <Text style={css.bold}>Lipídios:</Text> {`${parseFloat(item.attributes.lipid.qty).toFixed(2)} / ${item.attributes.lipid.unit}`}  </Text>
                    )
                }
                {item.attributes.fiber &&
                    (
                        <Text style={styles.descriptions}> <Text style={css.bold}>Fibras:</Text>  {`${parseFloat(item.attributes.fiber.qty).toFixed(2)} / ${item.attributes.fiber.unit}`}  </Text>
                    )
                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    viewCard: {
        marginTop: 55,
        backgroundColor: 'white',
        marginHorizontal: width * 0.04,
        marginVertical: width * 0.06,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: width * 0.05,
        borderTopLeftRadius: width * 0.05,
        shadowColor: 'black',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    header: {
        backgroundColor: '#95afc0',
        marginVertical: 0,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
    },
    title: {
        margin: width * 0.05,
        color: '#6D214F',
        fontSize: 24,
        textAlign: "center"
    },
    subTitle: {
        margin: width * 0.01,
        paddingVertical: 6,
        color: '#130f40',
        fontSize: 16,
        textAlign: "center"
    },
    descriptions: {
        margin: width * 0.01,
        paddingLeft: width * 0.18,
        color: '#dff9fb',
        backgroundColor: '#6D214F',
        padding: 10,
        fontSize: 20,
        textAlign: "justify",

    }
})

export default FoodInfo