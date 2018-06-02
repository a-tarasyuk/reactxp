/**
* Platform.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of Platform interface.
*/

import * as RX from '../common/Interfaces';
import * as Types from '../common/Types';

export class Platform extends RX.Platform {
    getType(): Types.PlatformType {
        return 'web';
    }

    select<T>(specifics: { [ platform in Types.PlatformType | 'default' ]?: T }): T | undefined {
        const platformType = this.getType();
        return platformType in specifics ? specifics[platformType] : specifics.default;
    }
}

export default new Platform();
