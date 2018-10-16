/**
 * ReactXP.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Wrapper for all ReactXP functionality. Users of ReactXP should import just this file instead of internals.
 */
import * as React from 'react';
import * as Animated from './Animated';

import App from './App';
import FocusManager from './utils/FocusManager';

import { setSortAndFilterFunc } from '../common/utils/AutoFocusHelper';
import { Types } from '../common/Interfaces';
import { CommonProps, CommonStyledProps } from '../common/Types';
import { ViewBase } from './ViewBase';

export const __spread = (React as any).__spread;
export { default as Accessibility } from './Accessibility';
export { default as Alert } from './Alert';
export { default as Clipboard } from './Clipboard';
export { default as Input } from './Input';
export { default as International } from './International';
export { default as Linking } from './Linking';
export { default as Location } from '../common/Location';
export { default as Modal } from './Modal';
export { default as Network } from './Network';
export { default as Platform } from './Platform';
export { default as Popup } from './Popup';
export { default as StatusBar } from './StatusBar';
export { default as Storage } from './Storage';
export { default as UserInterface } from './UserInterface';
export { default as UserPresence } from './UserPresence';
export { default as ScrollView } from './ScrollView';
export { default as Styles } from './Styles';
export { default as View } from './View';
export { ActivityIndicator } from './ActivityIndicator';
export { GestureView } from './GestureView';
export { Picker } from './Picker';
export { Image } from './Image';
export { Link } from './Link';
export { Text } from './Text';
export { TextInput } from './TextInput';
export { WebView } from './WebView';
export { Component, createElement, Children } from 'react';
export { App, Animated, CommonProps, CommonStyledProps, Types };

setSortAndFilterFunc(FocusManager.sortAndFilterAutoFocusCandidates);
ViewBase.setActivationState(App.getActivationState());
App.activationStateChangedEvent.subscribe(newState => ViewBase.setActivationState(newState));
