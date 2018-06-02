/**
* Picker.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* RN-specific implementation of the cross-platform Picker abstraction.
*/

import * as _ from './lodashMini';
import * as React from 'react';
import * as RN from 'react-native';
import * as RX from '../common/Interfaces';

export class Picker extends RX.Picker {
    render() {
        return (
            <RN.Picker
                selectedValue={ this.props.selectedValue }
                onValueChange={ this.onValueChange }
                style={ this.props.style }
                mode={ this.props.mode }
            >
                { _.map(this.props.items, (i, idx) => <RN.Picker.Item { ...i } key={ idx } /> ) }
            </RN.Picker>
        );
    }

    onValueChange = (itemValue: any, itemPosition: number) => {
        this.props.onValueChange(itemValue, itemPosition);
    }
}

export default Picker;
