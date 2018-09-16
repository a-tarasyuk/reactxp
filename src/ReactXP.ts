/**
 * ReactXP.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Simple wrapper file on the web implementation of ReactXP to get an appropriate type list
 * to export as a common d.ts for the package.
 */

import ReactXP from './web/ReactXP';

// @TODO consider using re-export instead of export =
export = ReactXP;
