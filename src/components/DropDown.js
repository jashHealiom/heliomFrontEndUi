import React, { FC, ReactElement, useRef, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
// import { Icon } from 'react-native-elements';

interface Props {
    label: string;
    data: Array<{ label: string; value: string }>;
    onSelect: (item: { label: string; value: string }) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(undefined);
    const [dropdownTop, setDropdownTop] = useState(0);

    const toggleDropdown = (): void => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = (): void => {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };

    const onItemPress = (item): void => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };

    const renderItem = ({ item }): ReactElement<any, any> => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderDropdown = (): ReactElement<any, any> => {
        return (
            <Modal visible={visible} transparent animationType="none">
                <SafeAreaView>
                    {/* <ScrollView> */}
                    <TouchableOpacity
                        style={styles.overlay}
                        onPress={() => setVisible(false)}
                    >
                        <View style={[styles.dropdown, { top: dropdownTop }]}>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </TouchableOpacity>
                    {/* </ScrollView> */}
                </SafeAreaView>
            </Modal >
        );
    };

    return (
        <TouchableOpacity
            ref={DropdownButton}
            style={styles.button}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            <Text style={styles.buttonText}>
                {(selected && selected.label) || label}
            </Text>
            {/* <Icon style={styles.icon} type="font-awesome" name="chevron-down" /> */}
        </TouchableOpacity>
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
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
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

