/**
 * ReactXP iOS
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Wrapper for all ReactXP functionality. Users of ReactXP should import just this file instead of internals.
 */
import React, { Children, Fragment, Component, createElement } from 'react';

import * as RX from '../common/Interfaces';

import AccessibilityInstance from './Accessibility';
import AccessibilityUtil from '../native-common/AccessibilityUtil';
import AccessibilityPlatformUtil from './AccessibilityUtil';
import { ActivityIndicator as ActivityIndicatorComponent } from '../native-common/ActivityIndicator';
import AlertInstance from '../native-common/Alert';
import { CommonAnimatedClasses, makeAnimated } from '../native-common/Animated';
import AppInstance from '../native-common/App';
import { Button as ButtonComponent } from '../native-common/Button';
import ClipboardInstance from '../native-common/Clipboard';
import { GestureView as GestureViewComponent } from './GestureView';
import { Image as ImageComponent } from '../native-common/Image';
import InputInstance from '../native-common/Input';
import InternationalInstance from '../native-common/International';
import { Link as LinkComponent } from '../native-common/Link';
import LinkingInstance from './Linking';
import LocationInstance from '../common/Location';
import ModalInstance from '../native-common/Modal';
import NetworkInstance from '../native-common/Network';
import { Picker as PickerComponent } from '../native-common/Picker';
import PlatformInstance from '../native-common/Platform';
import PopupInstance from '../native-common/Popup';
import { ScrollView as ScrollViewComponent } from '../native-common/ScrollView';
import StatusBarInstance from './StatusBar';
import StorageInstance from '../native-common/Storage';
import StylesInstance from '../native-common/Styles';
import { Text as TextComponent } from '../native-common/Text';
import { TextInput as TextInputComponent } from '../native-common/TextInput';
import UserInterfaceInstance from '../native-common/UserInterface';
import UserPresenceInstance from '../native-common/UserPresence';
import { View as ViewComponent } from '../native-common/View';
import { ViewBase } from '../native-common/ViewBase';
import { WebView as WebViewComponent } from '../native-common/WebView';

/**
 * Accessibility
 */
export type Accessibility = RX.Accessibility;
export const Accessibility: RX.Accessibility = AccessibilityInstance;

/**
 * ActivityIndicator
 */
export type ActivityIndicator = RX.ActivityIndicator;
export const ActivityIndicator: typeof RX.ActivityIndicator = ActivityIndicatorComponent;

/**
 * Animated
 */
export type Animated = RX.Animated;
export const Animated = makeAnimated(CommonAnimatedClasses);

/**
 * Alert
 */
export type Alert = RX.Alert;
export const Alert: RX.Alert = AlertInstance;

/**
 * App
 */
export type App = RX.App;
export const App: RX.App = AppInstance;

/**
 * Button
 */
export type Button = RX.Button;
export const Button: typeof RX.Button = ButtonComponent;

/**
 * Clipboard
 */
export type Clipboard = RX.Clipboard;
export const Clipboard: RX.Clipboard = ClipboardInstance;

/**
 * GestureView
 */
export type GestureView = RX.GestureView;
export let GestureView: typeof RX.GestureView = GestureViewComponent;

/**
 * Image
 */
export type Image = RX.Image;
export let Image: RX.ImageConstructor = ImageComponent;

/**
 * Input
 */
export type Input = RX.Input;
export let Input: RX.Input = InputInstance;

/**
 * International
 */
export type International = RX.International;
export let International: RX.International = InternationalInstance;

/**
 * Link
 */
export type Link = RX.Link;
export let Link: typeof RX.Link = LinkComponent;

/**
 * Linking
 */
export type Linking = RX.Linking;
export const Linking: RX.Linking = LinkingInstance;

/**
 * Location
 */
export type Location = RX.Location;
export const Location: RX.Location = LocationInstance;

/**
 * Modal
 */
export type Modal = RX.Modal;
export const Modal: RX.Modal = ModalInstance;

/**
 * Network
 */
export type Network = RX.Network;
export const Network: RX.Network = NetworkInstance;

/**
 * Picker
 */
export type Picker = RX.Picker;
export const Picker: typeof RX.Picker = PickerComponent;

/**
 * Platform
 */
export type Platform = RX.Platform;
export const Platform: RX.Platform = PlatformInstance;

/**
 * Popup
 */
export type Popup = RX.Popup;
export const Popup: RX.Popup = PopupInstance;

/**
 * ScrollView
 */
export type ScrollView = RX.ScrollView;
export const ScrollView: RX.ScrollViewConstructor = ScrollViewComponent;

/**
 * StatusBar
 */
export type StatusBar = RX.StatusBar;
export const StatusBar: RX.StatusBar = StatusBarInstance;

/**
 * Storage
 */
export type Storage = RX.Storage;
export const Storage: RX.Storage = StorageInstance;

/**
 * Styles
 */
export type Styles = RX.Styles;
export const Styles: RX.Styles = StylesInstance;

/**
 * Text
 */
export type Text = RX.Text;
export const Text: typeof RX.Text = TextComponent;

/**
 * TextInput
 */
export type TextInput = RX.TextInput;
export const TextInput: typeof RX.TextInput = TextInputComponent;

/**
 * UserInterface
 */
export type UserInterface = RX.UserInterface;
export const UserInterface: RX.UserInterface = UserInterfaceInstance;

/**
 * UserPresence
 */
export type UserPresence = RX.UserPresence;
export const UserPresence: RX.UserPresence = UserPresenceInstance;

/**
 * View
 */
export type View = RX.View;
export const View: typeof RX.View = ViewComponent;

/**
 * WebView
 */
export type WebView = RX.WebView;
export const WebView: RX.WebViewConstructor = WebViewComponent;

/**
 * React
 */
export const __spread = (React as any).__spread;
export { Component, Fragment, createElement, Children };

/**
 * Types
 */
export type ComponentBase = RX.Types.ComponentBase;
export type CommonProps = RX.Types.CommonProps;
export type CommonStyledProps<T> = RX.Types.CommonStyledProps<T>;
export type Stateless = RX.Types.Stateless;

const Types = RX.Types;
export { Types };

// Initialize the iOS default view style. This is required because on RN for iOS, the default
// overflow is 'visible', but we want it to be 'hidden' (the default for ReactXP and RN Android).
ViewBase.setDefaultViewStyle(StylesInstance.createViewStyle({ overflow: 'hidden' }));

// Initialize iOS implementation of platform accessibility helpers inside the singleton
// instance of native-common AccessibilityUtil. This is to let native-common components access
// platform specific APIs through native-common implementation itself.
AccessibilityUtil.setAccessibilityPlatformUtil(AccessibilityPlatformUtil);
