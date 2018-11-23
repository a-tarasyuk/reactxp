/**
 * ReactXP Web
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Wrapper for all ReactXP functionality. Users of ReactXP should import just this file instead of internals.
 */
import React, { Children, Fragment, Component, createElement } from 'react';

import * as Animated from './Animated';
import * as RX from '../common/Interfaces';

import AccessibilityInstance from './Accessibility';
import { ActivityIndicator as ActivityIndicatorComponent } from './ActivityIndicator';
import AlertInstance from './Alert';
import AppInstance from './App';
import { setSortAndFilterFunc } from '../common/utils/AutoFocusHelper';
import { Button as ButtonComponent } from './Button';
import ClipboardInstance from './Clipboard';
import FocusManager from './utils/FocusManager';
import { GestureView as GestureViewComponent } from './GestureView';
import { Image as ImageComponent } from './Image';
import InputInstance from './Input';
import InternationalInstance from './International';
import { Link as LinkComponent } from './Link';
import LinkingInstance from './Linking';
import LocationInstance from '../common/Location';
import ModalInstance from './Modal';
import NetworkInstance from './Network';
import { Picker as PickerComponent } from './Picker';
import PlatformInstance from './Platform';
import PopupInstance from '../web/Popup';
import { ScrollView as ScrollViewComponent } from './ScrollView';
import StatusBarInstance from './StatusBar';
import StorageInstance from './Storage';
import StylesInstance from './Styles';
import { Text as TextComponent } from './Text';
import { TextInput as TextInputComponent } from './TextInput';
import UserInterfaceInstance from './UserInterface';
import UserPresenceInstance from './UserPresence';
import { View as ViewComponent } from './View';
import { ViewBase } from './ViewBase';
import { WebView as WebViewComponent } from './WebView';

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
export { Animated };

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

/**
 * Initialize App
 */
setSortAndFilterFunc(FocusManager.sortAndFilterAutoFocusCandidates);
ViewBase.setActivationState(App.getActivationState());
App.activationStateChangedEvent.subscribe((newState: any) => ViewBase.setActivationState(newState));
