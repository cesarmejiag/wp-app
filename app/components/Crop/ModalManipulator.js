import React, {useState} from 'react';
import { Modal, SafeAreaView, Dimensions, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CropOverlay from './CropOverlay';
import * as ImageManipulator from 'expo-image-manipulator'

const heightTopBar = 24;
const heightButtonPad = 44;

function ModalManipulator(props) {

    const { width, height } = Dimensions.get('window');
    const { onPictureChoosed, isVisible, btnTexts } = props;

    const heightContainerImage = height - heightTopBar - heightButtonPad;

    const setImageRatio = (imgWidth, imgHeight) => {
        let ratioPercent = 100;
        let ratioWidth = 0;
        let ratioHeight = 0;
        let ratioTop = 0;
        let ratioLeft = 0;

        if (imgHeight > heightContainerImage || imgWidth > width) {
            if (imgHeight > imgWidth) {
                ratioPercent = (heightContainerImage * 100) / imgHeight;
            }
            else if (imgHeight < imgWidth) {
                ratioPercent = (width * 100) / imgWidth;
            }
    
            ratioHeight = (ratioPercent * imgHeight) / 100;
            ratioWidth = (ratioPercent * imgWidth) / 100;
        }
        else {
            ratioHeight = imgHeight;
            ratioWidth = imgWidth;
        }
    
        ratioTop = (heightContainerImage - ratioHeight) / 2;
        ratioLeft = (width - ratioWidth) / 2;

        return {
            ratioPercent,
            ratioWidth,
            ratioHeight,
            ratioTop,
            ratioLeft
        }
    }

    let photoRatio = setImageRatio(props.photo.width, props.photo.height);

    const CropData = {
        width: photoRatio.ratioWidth,
        height: photoRatio.ratioHeight,
        top: 0,
        left: 0
    };

    const [state, setState] = useState({
        showModal: props.isVisible,
        cropMode: false,
        photo: props.photo,
        photoRatio,
        base64: null,
        processing: false,
    });

    const onToggleModal = () => {
        if (!state.cropMode) {
            const { onToggleModal } = props;
            onToggleModal();
        }
        else {
            setState({ ...state, cropMode: false })
        }
    }

    const onShowCrop = () => {
        setState({ ...state, cropMode: true });
    }

    const onCropImage = async () => {
        CropData.width = (100 * CropData.width) / state.photoRatio.ratioPercent;
        CropData.height = (100 * CropData.height) / state.photoRatio.ratioPercent;
        if (state.photoRatio.ratioPercent < 100) {
            CropData.top = (100 * CropData.top) / state.photoRatio.ratioPercent;
            CropData.left = (100 * CropData.left) / state.photoRatio.ratioPercent;
        }
        setState({ ...state, processing: true })
        const { uri:uriResult, width:widthResult, height:heightResult, base64 } = await ImageManipulator.manipulateAsync(state.photo.uri,
        [{
            crop: {
                width: CropData.width,
                height: CropData.height,
                originX: CropData.left,
                originY: CropData.top
            }
        }],
        {
            compress: 1,
            format: 'png',
            base64: true,
        })


        photoRatio = setImageRatio(widthResult, heightResult);

        setState({ ...state, cropMode: false, processing: false, photo: {uri:uriResult, width:widthResult, height:heightResult, id: state.photo.id}, photoRatio, base64 })
    }

    const onOk = () => {
        const { photo, base64 } = state;
        onToggleModal();
        onPictureChoosed({ photo });
    }

    return (
        <Modal
            animationType="slide"
            transparent
            visible={ isVisible }
            hardwareAccelerated
            onRequestClose={ onToggleModal }>
                <SafeAreaView style={{width, flexDirection: 'column', backgroundColor: 'black'}}>
                    <View style={styles.buttonPad}>
                        <TouchableOpacity style={ styles.button } onPress={ onToggleModal }>
                            <Icon size={24} name="arrow-left" color="white" />
                        </TouchableOpacity>

                        <View style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row'}}>
                            {!state.cropMode ? (<>
                                <TouchableOpacity style={ [styles.button, { marginLeft: 10 }] } onPress={ onShowCrop }>
                                    <Icon size={20} name="crop" color="white" />
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={ [styles.button, { marginLeft: 10 }] } onPress={ onOk }>
                                    <Text style={ styles.textButton }>{btnTexts.done}</Text>
                                </TouchableOpacity>
                            </>) : 
                            (
                                <TouchableOpacity style={ [styles.button, { marginLeft: 10, display: 'flex', flexDirection: 'row', marginRight: 10 }] } onPress={ onCropImage }>
                                    <MaterialIcon style={{ flexDirection: 'row', marginRight: 10 }} size={24} name={!state.processing ? 'done' : 'access-time'} color="white" />
                                    <Text style={ styles.textButton }>{!state.processing ? btnTexts.crop : btnTexts.processing}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    <View style={[styles.imageArea, { position: 'relative', height: (heightContainerImage) }]}>
                        <Image style={{ height: state.photoRatio.ratioHeight, width: state.photoRatio.ratioWidth }} source={{uri: state.photo.uri}}></Image>
                        {state.cropMode && (
                            <CropOverlay
                            onLayoutChanged={(top, left, w, h) => {
                                CropData.width = w;
                                CropData.height = h;
                                CropData.top = top - state.photoRatio.ratioTop;
                                CropData.left = left - state.photoRatio.ratioLeft;
                            }}
                            initialWidth={state.photoRatio.ratioWidth}
                            initialHeight={state.photoRatio.ratioHeight}
                            initialTop={state.photoRatio.ratioTop}
                            initialLeft={state.photoRatio.ratioLeft}
                            minHeight={100}
                            minWidth={100}
                            borderColor='white'
                            ratio={{ratio: {height: null, width: null, }}} />
                        )}
                    </View>
                </SafeAreaView>
        </Modal>
    );
}

export default ModalManipulator;


const styles = StyleSheet.create({
    buttonPad: {
        display: 'flex',
        width: '100%',
        height: heightButtonPad,
        backgroundColor: 'black',
        paddingHorizontal: 15, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    button: {
        display: 'flex', 
        height: 32, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    textButton: {
        fontWeight: '500', 
        color: 'white', 
        fontSize: 18
    },

    imageArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
    }
});