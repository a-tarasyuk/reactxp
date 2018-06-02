/**
* Input.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web implementation of Input interface.
*/

import * as RX from '../common/Interfaces';
import * as Types from '../common/Types';

export class Input extends RX.Input {
    constructor() {
        super();
    }

    dispatchKeyDown(e: Types.KeyboardEvent) {
        this.keyDownEvent.fire(e);
    }

    dispatchKeyUp(e: Types.KeyboardEvent) {
        if (this.keyUpEvent.fire(e)) {
            e.stopPropagation();
        }
    }
}

export default new Input();
