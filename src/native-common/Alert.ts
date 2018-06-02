/**
* Alert.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Native Alert dialog boxes for ReactXP.
*/

import * as RN from 'react-native';
import * as RX from '../common/Interfaces';
import * as Types from '../common/Types';

// Native implementation for alert dialog boxes
export class Alert implements RX.Alert {
    public show(title: string, message?: string, buttons?: Types.AlertButtonSpec[],
            options?: RX.Types.AlertOptions): void {
        RN.Alert.alert(title, message, buttons);
    }
}

export default new Alert();
