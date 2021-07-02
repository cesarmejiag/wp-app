import React from 'react'
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native'
import { Button } from 'react-native-elements'
import HTML from 'react-native-render-html'
import globalStyles from './../../utils/styles'
import useCart from './../../hooks/useCart';
import TouchableItem from "../../components/Product/TouchableItem";

export default function ProductDetail({ navigation, route }) {
    const { addToCart } = useCart();
    const contentWidth = useWindowDimensions().width

    const item = route.params.item
    const { description } = item

    const onPress = () => {
        // addToCart(item);
        navigation.navigate('product-process', { item })
    }

    return (
        <ImageBackground
            source={require('./../../../assets/img/background-top-large.png')}
            style={styles.imageBackground}
        >
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.itemContainer}>
                        <TouchableItem item={item} onPress={onPress} />
                    </View>
                    <Text style={styles.title}>Características</Text>
                    <View style={styles.descriptionWrapper}>
                        <HTML
                            tagsStyles={HTMLStyles}
                            classesStyles={HTMLStyles}
                            source={{
                                html: `<div class="description">${description}</div>`,
                            }}
                            contentWidth={contentWidth}
                        />
                    </View>
                    <Button
                        title="Continuar"
                        buttonStyle={globalStyles.btn}
                        containerStyle={globalStyles.btnContainer}
                        titleStyle={globalStyles.btnTitle}
                        onPress={onPress}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const HTMLStyles = {
    description: {
        color: '#3A3A3A',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 15,
        lineHeight: 20,
    },
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        paddingBottom: 20,
        paddingHorizontal: 45,
    },
    itemContainer: {
        marginVertical: 20,
    },
    title: {
        color: '#3A3A3A',
        fontFamily: 'texgyreadventor-bold',
        fontSize: 19,
        textTransform: 'uppercase',
    },
    descriptionWrapper: {
        marginTop: 10,
        marginBottom: 40,
    },
})
