/**
 * ImageListPanel.tsx
 *
 * Display first screen of the image list sample application.
 */

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import ImageStore from './ImageStore';

interface SearchFieldState {
    value: string;
}

const _styles = {
    textInput: RX.Styles.createTextInputStyle({
        margin: 12,
        padding: 4,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 30,
        fontSize: 16
    }),
};

class Search extends ComponentBase<{}, SearchFieldState> {
    protected _buildState(): SearchFieldState {
        return { value: ImageStore.getSearchQuery() };
    }

    render() {
        return (
			<RX.TextInput
				accessibilityId={ 'SearchFieldInput' }
				placeholder={ 'Search for a GIF' }
				autoFocus={ true }
				style={ _styles.textInput }
				value={ this.state.value }
				onChangeText={ (value: string) => ImageStore.updateImageList(value) }
			/>
        );
    }
}

export default Search;
