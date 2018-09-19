/**
 * RootView.tsx
 *
 * Display first screen of the image list sample application.
 */

import * as RX from 'reactxp';

import SearchField from './SearchField';
import ImageList from './ImageList';

const _styles = {
    main: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch'
    }),
    statusSpacer: RX.Styles.createViewStyle({
        marginTop: 22
    })
};

class RootView extends RX.Component {
    render() {
        return (
            <RX.View
                useSafeInsets={ true }
                style={ [_styles.main, RX.StatusBar.isOverlay() ? _styles.statusSpacer : undefined] }
            >
                <SearchField />
                <ImageList />
            </RX.View>
        );
    }
}

export default RootView;
