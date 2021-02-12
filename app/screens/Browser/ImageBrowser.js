import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    Dimensions,
    ActivityIndicator,
    SafeAreaView,
    View,
} from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation'
import * as MediaLibrary from 'expo-media-library'
import * as Permissions from 'expo-permissions'
import { LANDSCAPE_SISE, PORTRAIT_SIZE } from 'constants/config'
import ImageTile from './ImageTile'
import Loader from 'components/Loader'

const { width } = Dimensions.get('window')

class ImageBrowser extends Component {
    static defaultProps = {
        loadCompleteMetadata: true,
        loadCount: 50,
        emptyStayComponent: null,
        preloaderComponent: <ActivityIndicator size="large" />,
    }

    state = {
        hasCameraPermission: null,
        hasCameraRollPermission: null,
        numColumns: 3,
        photos: [],
        selected: [],
        isEmpty: false,
        after: null,
        hasNextPage: true,
        loading: false,
    }

    async componentDidMount() {
        try {
            await this.getPermissionsAsync()

            ScreenOrientation.addOrientationChangeListener(
                this.onOrientationChange
            )
            const orientation = await ScreenOrientation.getOrientationAsync()
            const numColumns = this.getNumColumns(orientation)
            this.setState({
                numColumns,
            })

            this.getPhotos(true)
        } catch (error) {
            console.log(error)
        }
    }

    getPermissionsAsync = async () => {
        try {
            const { status: camera } = await Permissions.askAsync(
                Permissions.CAMERA
            )
            const { status: cameraRoll } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            )

            this.setState({
                hasCameraPermission: camera === 'granted',
                hasCameraRollPermission: cameraRoll === 'granted',
            })
        } catch (error) {
            console.log('getPermissionsAsync::', error)
        }
    }

    onOrientationChange = ({ orientationInfo }) => {
        ScreenOrientation.removeOrientationChangeListeners()
        ScreenOrientation.addOrientationChangeListener(this.onOrientationChange)
        const numColumns = this.getNumColumns(orientationInfo.orientation)
        this.setState({ numColumns })
    }

    getNumColumns = orientation => {
        const { PORTRAIT_UP, PORTRAIT_DOWN } = ScreenOrientation.Orientation
        const isPortrait =
            orientation === PORTRAIT_UP || orientation === PORTRAIT_DOWN

        return isPortrait ? PORTRAIT_SIZE : LANDSCAPE_SISE
    }

    selectImage = index => {
        let newSelected = Array.from(this.state.selected)
        if (newSelected.indexOf(index) === -1) {
            newSelected.push(index)
        } else {
            const deleteIndex = newSelected.indexOf(index)
            newSelected.splice(deleteIndex, 1)
        }

        if (newSelected.length > this.props.max) return
        if (!newSelected) newSelected = []

        this.setState({ selected: newSelected }, () => {
            this.props.onChange(newSelected.length, () =>
                this.prepareCallback()
            )
        })
    }

    getPhotos = showLoader => {
        if (showLoader) {
            this.setState({
                loading: true,
            })
        }

        const params = {
            first: this.props.loadCount,
            assetType: MediaLibrary.MediaType.photo,
            sortBy: [MediaLibrary.SortBy.creationTime],
        }
        if (this.state.after) params.after = this.state.after
        if (!this.state.hasNextPage) return

        MediaLibrary.getAssetsAsync(params).then(data => {
            this.processPhotos(data)

            if (showLoader) {
                this.setState({
                    loading: false,
                })
            }
        })
    }

    processPhotos = data => {
        if (data.totalCount) {
            if (this.state.after === data.endCursor) return
            const uris = data.assets
            this.setState({
                photos: [...this.state.photos, ...uris],
                after: data.endCursor,
                hasNextPage: data.hasNextPage,
            })
        } else {
            this.setState({ isEmpty: true })
        }
    }

    getItemLayout = (data, index) => {
        const length = width / 4
        return { length, offset: length * index, index }
    }

    prepareCallback() {
        const { loadCompleteMetadata } = this.props
        const { selected, photos } = this.state
        const selectedPhotos = selected.map(i => photos[i])
        if (!loadCompleteMetadata) {
            this.props.callback(Promise.all(selectedPhotos))
        } else {
            const assetsInfo = Promise.all(
                selectedPhotos.map(i => MediaLibrary.getAssetInfoAsync(i))
            )
            this.props.callback(assetsInfo)
        }
    }

    renderImageTile = ({ item, index }) => {
        const { numColumns } = this.state
        const selected = this.state.selected.indexOf(index) !== -1
        const selectedItemNumber = this.state.selected.indexOf(index) + 1
        return (
            <ImageTile
                selectedItemNumber={selectedItemNumber}
                item={item}
                index={index}
                selected={selected}
                selectImage={this.selectImage}
                renderSelectedComponent={this.props.renderSelectedComponent}
                numColumns={numColumns}
            />
        )
    }

    renderPreloader = () => this.props.preloaderComponent

    renderEmptyStay = () => this.props.emptyStayComponent

    renderImages() {
        return (
            <FlatList
                data={this.state.photos}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                style={styles.flatList}
                numColumns={this.state.numColumns}
                key={this.state.numColumns}
                keyExtractor={(_, index) => index}
                onEndReached={() => this.getPhotos()}
                onEndReachedThreshold={0.5}
                initialNumToRender={24}
                getItemLayout={this.getItemLayout}
                ListEmptyComponent={
                    this.state.isEmpty
                        ? this.renderEmptyStay()
                        : this.renderPreloader()
                }
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            height: 10,
                        }}
                    />
                )}
                renderItem={this.renderImageTile}
            />
        )
    }

    render() {
        const { noCameraPermissionComponent = null } = this.props
        const { hasCameraPermission, loading } = this.state

        if (!hasCameraPermission) {
            return noCameraPermissionComponent
        }

        if (loading) {
            return <Loader isVisible={loading} text="Cargando..." />
        }

        return (
            <SafeAreaView style={[styles.container]}>
                {this.renderImages()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 25,
    },
    flatList: {
        flex: 1,
    },
})

export default ImageBrowser
