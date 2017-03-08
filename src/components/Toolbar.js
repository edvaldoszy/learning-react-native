import React, { Component } from "react";
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";

import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from "react-native-popup-menu";

export default class Toolbar extends Component {

    constructor(props) {
        super(props);

        if (props.onMenuOptionClick && typeof props.onMenuOptionClick != "function") {
            throw new Error("onMenuOptionClick must be a function");
        }
        this.onMenuOptionClick = props.onMenuOptionClick;

        if (props.onHomeButtonClick && typeof props.onHomeButtonClick != "function") {
            throw new Error("onHomeButtonClick must be a function");
        }
        this.onHomeButtonClick = props.onHomeButtonClick;
    }

    _onMenuOptionClick(value) {
        if (this.onMenuOptionClick) {
            this.onMenuOptionClick(value);
        }
    }

    _onHomeButtonClick() {
        if (this.onHomeButtonClick) {
            this.onHomeButtonClick();
        }
    }

    render() {
        const { title, children } = this.props;

        return (
            <MenuContext>
                <View
                    style={styles.mainContainer}>
                    {this.renderHomeButton()}
                    <View
                        style={styles.titleContainer}>
                        {title ? this.renderTitleComponent() : children}
                    </View>
                    {this.renderPopupMenu()}
                </View>                
            </MenuContext>
        );
    }

    renderHomeButton() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.homeButtonContainer}
                    onPress={this._onHomeButtonClick.bind(this)}>
                    <Image
                        source={require("../assets/images/ic_menu/ic_menu.png")}/>
                </TouchableHighlight>
            </View>
        );
    }

    renderTitleComponent() {
        return (
            <Text style={styles.title}>{this.props.title}</Text>
        );
    }

    renderPopupMenu() {
        if (!this.props.menuOptions) {
            return null;
        }

        return (
            <View
                style={styles.menuContainer}>
                <Menu 
                    onSelect={this._onMenuOptionClick.bind(this)}>
                    <MenuTrigger>
                        <Image
                            style={styles.menuTriggerIcon}
                            source={require("../assets/images/ic_more_vert/ic_more_vert.png")}/>
                    </MenuTrigger>
                    <MenuOptions>
                        {this.renderMenuOptions()}
                    </MenuOptions>
                </Menu>
            </View>
        );
    }

    renderMenuOptions() {
        const { menuOptions } = this.props;

        var output = [];
        for (var key in menuOptions) {
            if (!menuOptions.hasOwnProperty(key)) {
                continue;
            }

            var option = menuOptions[key];
            output.push(
                <MenuOption
                    style={styles.menuOption}
                    key={key}
                    value={key}
                    text={option.label} />
            );
        }

        return output;
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: '#3f51b5',
    },
    homeButtonContainer: {
        padding: 14
    },
    titleContainer: {
        flex: 1,
        marginLeft: 14,
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        marginVertical: 14,
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff"
    },
    menuContainer: {
        
    },
    menuTriggerIcon: {
        marginVertical: 14,
        marginHorizontal: 10
    },
    menuOption: {
        padding: 12
    }
});
