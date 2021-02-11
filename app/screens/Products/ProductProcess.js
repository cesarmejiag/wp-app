import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import globalStyles from './../../utils/styles'

export default function ProductProcess({ navigation, route }) {
    const item = route.params.item;

    return (
        <ImageBackground
            source={require('./../../../assets/img/background-top-small.png')}
            style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Proceso</Text>
                    <View style={styles.stepsList}>
                        <View style={styles.step}>
                            <Image
                                style={styles.stepIcon}
                                source={require('./../../../assets/img/icon-step-1.png')} />
                            <Text style={styles.stepTitle}>1. Selecciona tus fotos</Text>
                            <Text style={styles.stepDesc}>Selecciona 13 fotos para tu álbum</Text>
                        </View>
                        <View style={styles.step}>
                            <Image
                                style={styles.stepIcon}
                                source={require('./../../../assets/img/icon-step-2.png')} />
                            <Text style={styles.stepTitle}>2. Auto relleno</Text>
                            <Text style={styles.stepDesc}>Nuestra App acomoda tus fotos de la mejor manera</Text>
                        </View>
                        <View style={styles.step}>
                            <Image
                                style={styles.stepIcon}
                                source={require('./../../../assets/img/icon-step-3.png')} />
                            <Text style={styles.stepTitle}>3. Personaliza</Text>
                            <Text style={styles.stepDesc}>Puedes recortar y acomodar tus fotos para que luzcan mejor</Text>
                        </View>
                    </View>

                    <Button
                        title='Continuar'
                        buttonStyle={globalStyles.btn}
                        containerStyle={globalStyles.btnContainer}
                        titleStyle={globalStyles.btnTitle}
                        onPress={() => navigation.navigate('image-browser')} />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        paddingBottom: 20,
        paddingHorizontal: 45,
    },
    title: {
        color: "#3A3A3A",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 19,
        marginBottom: 30,
        marginTop: 20,
        textAlign: "center"
    },
    stepsList: {
        alignItems: "center"
    },
    step: {
        alignItems: "center",
        marginBottom: 30,
        width: 220
    },
    stepIcon: {
        height: 40,
        marginBottom: 10,
        width: 40
    },
    stepTitle: {
        color: "#000",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 15,
        textAlign: 'center'
    },
    stepDesc: {
        color: "#000",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 14,
        textAlign: 'center'
    }
})
