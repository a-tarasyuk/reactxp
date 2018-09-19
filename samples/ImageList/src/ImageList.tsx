/**
 * Displays a simple list of images.
 */

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';
import { VirtualListView, VirtualListViewItemInfo } from 'reactxp-virtuallistview';

import ImageStore, { Image } from './ImageStore';

interface ImageListItemInfo extends VirtualListViewItemInfo {
    image: Image;
}

interface ImageListState {
    isPerformingSearch: boolean;
    isFirstSearch: boolean;
    searchQuery: string;
    imageItems: ImageListItemInfo[];
}

const _itemHeight = 120;

const _styles = {
    listScroll: RX.Styles.createViewStyle({
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        margin: 12
    }),
    itemCell: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection: 'row',
        height: _itemHeight,
        alignItems: 'center',
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderTopWidth: 1,
    }),
    image: RX.Styles.createImageStyle({
        height: 100,
        width: 133
    }),
    main: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 1,
    }),
    labelText: RX.Styles.createTextStyle({
        fontSize: 30,
    }),
    linkText: RX.Styles.createLinkStyle({
        flex: -1,
        fontSize: 14,
        color: 'blue',
        padding: 12
    })
};

class ImageList extends ComponentBase<{}, ImageListState> {
    protected _buildState(): ImageListState {
        return {
            isPerformingSearch: ImageStore.isPerformingSearch(),
            isFirstSearch: ImageStore.isFirstSearch(),
            searchQuery: ImageStore.getSearchQuery(),
            imageItems: ImageStore.getImageList().map(image => {
                return {
                    key: image.smallUrl,
                    height: _itemHeight,
                    template: 'image',
                    image: image
                };
            })
        };
    }

    render() {
        const { isPerformingSearch, searchQuery, isFirstSearch, imageItems } = this.state;

        // If the search is pending, render a spinner.
        if (isPerformingSearch) {
            return (
                <RX.View style={ _styles.main }>
                    <RX.ActivityIndicator color={ '#ccc' } size={ 'large' } />
                </RX.View>
            );
        }

        if (!imageItems.length) {
            return (
                <RX.View style={ _styles.main }>
                    <RX.Text style={ _styles.labelText }>
                        { isFirstSearch || !searchQuery ? 'Search all the GIFs and Stickers...' : `No Results for ${ searchQuery }` }
                    </RX.Text>
                </RX.View>
            );
        }

        return (
            <VirtualListView
                itemList={ imageItems }
                style={ _styles.listScroll }
                renderItem={ this._renderItem }
            />
        );
    }

    private _renderItem = (item: ImageListItemInfo) => {
        return (
            <RX.View style={ _styles.itemCell }>
                <RX.Image
                    resizeMode={ 'cover' }
                    source={ item.image.smallUrl }
                    style={ _styles.image }
                />

                <RX.Link style={ _styles.linkText } url={ item.image.originalUrl }>
                    { item.image.originalUrl }
                </RX.Link>
            </RX.View>
        );
    }
}

export default ImageList;
