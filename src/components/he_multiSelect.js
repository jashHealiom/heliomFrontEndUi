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
// import { Icon } from 'react-native-elements';


const Dropdown = ({ label, data, onSelect, ButtonStyle, overlay }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState([]);
    const [dropdownTop, setDropdownTop] = useState(0);
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsScrollEnabled(true);
    //     }, 3000);
    // }, []);
    const toggleDropdown = ()=> {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = ()=> {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };

    const onItemPress = (item, selectedData)=> {
        // if item not present in selectedData
        setSelected((selectedData)=>[...selectedData, item]); //render this in flatlist row wala with 2-3 columns
        // warna kn
        onSelect(item);
        setVisible(false);
    };

    const renderItem = ({ item })=> (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item, selected)}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderDropdown = ()=> {
        return (
            <Modal visible={visible} transparent animationType="none">
                {/* <SafeAreaView> */}
                    <TouchableOpacity
                        style={overlay}
                        onPress={() => setVisible(false)}
                    >
                        <View style={[styles.dropdown, { top: dropdownTop }]}>
                            <FlatList
                                data={data}
                                isScrollEnabled={true}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </TouchableOpacity>
                {/* </SafeAreaView> */}
            </Modal>
        );
    };

    return (
        <View>
        <TouchableOpacity
            ref={DropdownButton}
            style={ButtonStyle}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            <Text style={styles.buttonText}>
                {(selected && selected.label) || label}
            </Text>
            {/* <Icon style={styles.icon} type="font-awesome" name="chevron-down" /> */}
        </TouchableOpacity>
        {/* flatlist with row, columns */}
        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        height: 40,
        zIndex: 1,
        width: '100%', borderBottomWidth: 1,
        borderBottomColor: "#000",

    },
    buttonText: {
        flex: 1,
        // textAlign: 'center',
    },
    icon: {
        marginRight: 10,
    },
    dropdown: {
        // position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        height: 122,
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    overlay: {
        width: '90%',
        height: '50%',
        // backgroundColor: "#f2f",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#24DAC6"
    },
});

export default Dropdown;

