/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    ToastAndroid,
    DrawerLayoutAndroid,
    Text,
    View
} from "react-native";
import Toolbar from "./src/components/Toolbar";

export default class LearningReactNative extends Component {

    MENU_OPTIONS = {
        key1: {
            label: "Menu 1"
        },
        key2: {
            label: "Menu 2"
        }
    };

    _onHomeButtonClick() {
        this.drawer.openDrawer();
    }

    _onMenuOptionClick(value) {
        ToastAndroid.show(value, ToastAndroid.LONG);
    }

    renderToolbar() {
        return (
            <Toolbar
                title="React Native Toolbar"
                onHomeButtonClick={this._onHomeButtonClick.bind(this)}
                onMenuOptionClick={this._onMenuOptionClick.bind(this)}
                menuOptions={this.MENU_OPTIONS} />
        );
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                style={styles.mainContainer}
                drawerWidth={260}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => {}}>

                {this.renderToolbar()}
                
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },
    container: {
        flex: 1,
        backgroundColor: "#f0f"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('LearningReactNative', () => LearningReactNative);
