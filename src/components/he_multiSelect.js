import React, { FC, ReactElement, useRef, useState, useEffect } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    View,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = require("../assets/css/ComponentStyle");
export default Dropdown = ({ label, data, onSelect, ButtonStyle, overlay }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState([]);
    const [dropdownTop, setDropdownTop] = useState(0);


    const toggleDropdown = () => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = () => {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };

    // const onItemPress = (item) => {
    //     setSelected(item);
    //     onSelect(item);
    //     setVisible(false);
    // };
    const InsertDropDownValue = (item) => {
        const isFound = selected.some(element => {
            if (element.label === item.label) {
                return true;
            }
            return false;
        });
        if (!isFound) {
            let selectedItem = selected;
            var obj = {};
            obj["label"] = item.label
            obj["value"] = item.value;
            selectedItem.push(obj);
            setSelected(selectedItem);
            onSelect(item);
            // setVisible(false);
        }
    };
    const DeleteDropDownValue = (index) => {
        var newData = [...selected]
        if (index > -1) {
            newData.splice(index, 1);
            setSelected(newData);
        }
    }

    const renderItem = ({ item, index }) => {
        const isFound = selected.some(element => {
            if (element.label === item.label) {
                return true;
            }
            return false;
        });
        return (
            <TouchableOpacity key={index} style={styles.itemMultiSelect} onPress={() => InsertDropDownValue(item)} >
                <Text>{item.label}</Text>
                {isFound ? (<Icon name="checkmark-outline" color="#24DAC6" size={16} />) : null}

            </TouchableOpacity>

        )
    };

    const renderDropdown = () => {
        return (
            <Modal visible={visible} transparent animationType="none">
                <TouchableOpacity
                    activeOpacity={0.1}
                    style={overlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={[styles.dropdown, { top: dropdownTop, }]}>
                        <FlatList
                            data={data}
                            scrollEnabled={true}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    </View>
                </TouchableOpacity>
                <View style={styles.SelectedDropDownContainer}>
                    {selected.map((item, index) => {
                        return <View key={index} style={styles.SelectedDropDownItem} >
                            <Text style={styles.SelectedDropDownText}>{item.value}</Text>
                            <TouchableOpacity activeOpacity={0.1} onPress={() => DeleteDropDownValue(index)} >
                                <Icon name="close-outline" color="#24DAC6" size={20} />
                            </TouchableOpacity>
                        </View>
                    })}
                </View>
            </Modal>
        );
    };

    return (
        <TouchableOpacity
            ref={DropdownButton}
            style={ButtonStyle}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            <Text style={styles.buttonText}>
                {(selected && selected.label) || label}{' '}{(selected && selected.length) || null}
            </Text>
            {/* <Icon style={styles.icon} type="font-awesome" name="chevron-down" /> */}
        </TouchableOpacity>
    );
};



