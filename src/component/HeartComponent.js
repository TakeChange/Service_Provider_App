import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HeartComponent = () => {

    const [checkState, setCheckState] = useState(false)

    return (
        <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }} onPress={() => setCheckState(!checkState)}>
            <AntDesign name={checkState ? 'heart' : 'hearto'} size={20} color={checkState ? 'red' : '#000'} />
        </TouchableOpacity>
    )
}

export default HeartComponent