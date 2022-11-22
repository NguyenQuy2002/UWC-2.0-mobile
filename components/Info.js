import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
function Info(props) {
    const navigation = useNavigation()
    const onPressHandler = () => {
        navigation.navigate('ChangeInfo', {value: props.value, change: props.change})
    }
    return (
        <View style={styles.body}>
            <View style={styles.info}>
                <View style={styles.container}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.value}>{props.value}</Text>
                </View>
                <View style={styles.image}>
                    <Pressable
                        onPress={onPressHandler}
                    >
                        <Image 
                            style={styles.arrow}
                            resizeMode="cover"
                            source={require("../assets/arrow.png")}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: 75,
        marginTop: 30,
    },
    info: {
        flexGrow: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    container: {
        flexGrow: 15,
        flexBasis: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 16,
    },  
    title: {
        flexGrow: 3,
        fontSize: 16,
        textAlignVertical: 'center'
    },
    value: {
        flexGrow: 3,
        fontSize: 22,
    },
    image: {
        flexGrow: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    arrow: {
        width: 40,
        height: 28,
    },
})
export default Info;