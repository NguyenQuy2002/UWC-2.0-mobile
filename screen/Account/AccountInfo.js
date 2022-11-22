import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CloseButton from '../../components/CloseButton';
import Header from '../../components/Header';
import Info from '../../components/Info';

function AccountInfo({route}) {
    const navigation = useNavigation()
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.body}>
            <Header 
                name="Tài khoản của tôi"
            />
            <Info 
                title="Tên"
                value="123"
                change="Name"
            />
            <Info 
                title="Số điện thoại"
                value="3232"
                change="Phone"
            />
            <Info 
                title="Email"
                value="333"
                change="Email"
            />
            <CloseButton 
                name="Đóng"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#d9d9d9"
    },
})
export default AccountInfo;