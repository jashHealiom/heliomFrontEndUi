import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'

const He_Loader = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            {loading === true ? (
                <Modal isVisible={loading} style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.1)', margin: 0,
                    justifyContent: "center", alignItems: "center", backgroundColor: "#000"
                }}	>
                    <View style={{ height: "100%", justifyContent: "center" }}>
                        <ActivityIndicator size="large" color={props.color} />
                    </View>
                </Modal>
            ) : null}
        </View>
    )
}

export default He_Loader