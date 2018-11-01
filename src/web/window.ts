/*
 * window.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Window module to enable easy mocking.
 */

const win: Window | {} = typeof (window) !== 'undefined' ? window : {};
export default win;
