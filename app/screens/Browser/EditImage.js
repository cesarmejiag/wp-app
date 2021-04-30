import React, {useState}from 'react'
import globalStyles from 'utils/styles'
import { StyleSheet, Image, Button, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import Formatter from '../../utils/Formatter';
import GridList from 'react-native-grid-list';

function EditImage({ route, navigation }) {

    const [isFullPic, setSelection] = useState(true);
    const { photos, item } = route.params;

    const handlePressOnePic = (e) => {
        e.preventDefault();
        setSelection(true);
    }

    const handlePressCollage = (e) => {
        e.preventDefault();
        setSelection(false);
    }

    const handlePressButton = (e) => {
        e.preventDefault();
        alert('Button');
    }

    const handlePressImage = (item) => {
        if (item.thumbnail)
            alert(item.thumbnail.uri);
        else
            alert(item);
    }

    // const d = photos.map(p => p.uri);
    // console.log(d);
    const d = photos.map(p => p.uri);
    const items = [];
    d.forEach(element => {
        items.push({ thumbnail: { uri: element } });
    });

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => handlePressImage(item)}>
            <Image style={styles.imageCollage} source={item.thumbnail} />
        </TouchableOpacity>
    );

    return(
        <>
            {/* <Text>{item.name}</Text> */}
            <Divider style={styles.divider} />
            <View style={styles.priceBar}>
                <Text>{Formatter.currency(item.sale_price)}</Text>  
            </View>
            <View style={styles.buttonsBar}>
                <TouchableOpacity style={styles.button} onPress={handlePressOnePic}>
                    <View style={styles.buttonContetn}>
                        <Text>{photos.length} Foto{photos.length > 1 ? 's' : ''}</Text>
                    </View>
                    {isFullPic ? <Divider style={styles.dividerButton} /> : <></>}
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={handlePressCollage}>
                <View style={styles.buttonContetn}>
                        <Text>Collage</Text>
                    </View>
                    {!isFullPic ? <Divider style={styles.dividerButton} /> : <></>}
                </TouchableOpacity>
            </View>
            {isFullPic ? 
                <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {photos.map((photo, id) => (
                        <TouchableOpacity key={id} style={styles.contentImage} onPress={() => handlePressImage(photo.uri)}>
                            {/* <View  >
                                <Image style={styles.image} source={{ uri: photo.uri}} />
                            </View> */}
                            <Image style={styles.image} source={{ uri: photo.uri}} />
                        </TouchableOpacity>
                    ))}
                </ScrollView> : 
                <View style={styles.containerCollage}>
                    <GridList
                    showSeparator
                    data={items}
                    numColumns={3}
                    renderItem={renderItem}
                    />
                </View>
            }
            
            
            <View style={styles.botonera}>
                <TouchableOpacity style={styles.marginButton} onPress={handlePressButton}>
                    <View style={styles.btn}>
                        <Text style={styles.btnTitle}>Listo</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    botonera: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    marginButton: {
        marginBottom: 25,
        marginTop: 20,
    },
    btn: {
        backgroundColor: "#3241F0",
        borderRadius: 8,
        borderColor: "#4A4A4A",
        borderWidth: 1,
        height: 36,
        width: 175,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnTitle: {
        color: "#FFFFFF",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 14,
        letterSpacing: 1.4,
        lineHeight: 18,
        marginLeft: 10,
        textTransform: 'uppercase'
    },
    contentImage:{
        width: "100%",
        padding: 25,
        paddingBottom: 0
    },
    image: {
        height: 550,
        resizeMode: "cover",
        width: "100%",
        borderRadius: 5
    },
    priceBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 80,
        backgroundColor: "#BCFCFF",
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    divider: {
        backgroundColor: '#494949'
    },
    buttonsBar: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#ffecc4'
    },
    button: {
        flex: 1,
    },
    buttonContetn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    dividerButton: {
        backgroundColor: '#d0d0d0',
        height: 3
    },


    containerCollage: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageCollage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});

export default EditImage