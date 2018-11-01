/*
 * window.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Window module to enable easy mocking.
 */

export default typeof(window) !== 'undefined' ? window : {} as Window;
