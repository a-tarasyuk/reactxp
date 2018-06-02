﻿/**
* Link.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* RN-specific implementation of the cross-platform Link abstraction.
*/

import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as RN from 'react-native';
import * as RX from '../common/Interfaces';
import * as Types from '../common/Types';

import { FocusArbitratorProvider } from '../common/utils/AutoFocusHelper';

import AccessibilityUtil from './AccessibilityUtil';
import EventHelpers from './utils/EventHelpers';
import Linking from '../native-common/Linking';

export interface LinkContext {
    focusArbitrator?: FocusArbitratorProvider;
    isRxParentAText?: boolean;
}

export class Link extends React.Component<Types.LinkProps, {}> {
    static contextTypes = {
        focusArbitrator: PropTypes.object,
        isRxParentAText: PropTypes.bool
    };

    context!: LinkContext;

    protected _mountedComponent: RN.ReactNativeBaseComponent<any, any>|null = null;

    // To be able to use Link inside TouchableHighlight/TouchableOpacity
    public setNativeProps(nativeProps: RN.TextProps) {
        if (this._mountedComponent) {
            this._mountedComponent.setNativeProps(nativeProps);
        }
    }

    render() {
        let internalProps: RN.TextProps = {
            ref: this._onMount,
            style: this.props.style,
            numberOfLines: this.props.numberOfLines === 0 ? undefined : this.props.numberOfLines,
            onPress: this._onPress,
            onLongPress: this._onLongPress,
            allowFontScaling: this.props.allowFontScaling,
            maxContentSizeMultiplier: this.props.maxContentSizeMultiplier,
            children: this.props.children
        };

        return this._render(internalProps);
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            this.requestFocus();
        }
    }

    protected _render(internalProps: RN.TextProps) {
        return (
            <RN.Text
                { ...internalProps }
            />
        );
    }

    protected _onMount = (component: RN.ReactNativeBaseComponent<any, any>|null) => {
        this._mountedComponent = component;
    }

    protected _onPress = (e: RX.Types.SyntheticEvent) => {
        if (EventHelpers.isRightMouseButton(e)) {
            if (this.props.onContextMenu) {
                this.props.onContextMenu(EventHelpers.toMouseEvent(e));
            }
            return;
        }

        if (this.props.onPress) {
            this.props.onPress(EventHelpers.toMouseEvent(e), this.props.url);
            return;
        }

        // The default action is to launch a browser.
        if (this.props.url) {
            Linking.openUrl(this.props.url).catch(err => {
                // Catch the exception so it doesn't propagate.
            });
        }
    }

    protected _onLongPress = (e: RX.Types.SyntheticEvent) => {
        // Right mouse button doesn't change behavior based on press length.
        if (EventHelpers.isRightMouseButton(e)) {
            if (this.props.onContextMenu) {
                this.props.onContextMenu(EventHelpers.toMouseEvent(e));
            }
            return;
        }

        if (!EventHelpers.isRightMouseButton(e) && this.props.onLongPress) {
            this.props.onLongPress(EventHelpers.toMouseEvent(e), this.props.url);
        }
    }

    requestFocus() {
        FocusArbitratorProvider.requestFocus(
            this,
            () => this.focus(),
            () => !!this._mountedComponent
        );
    }

    focus() {
        if (this._mountedComponent) {
            AccessibilityUtil.setAccessibilityFocus(this);
        }
    }

    blur() {
        // No-op
    }
}

export default Link;
