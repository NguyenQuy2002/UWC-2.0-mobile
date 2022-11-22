import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Message(props) {
    var inactive;
    const navigation = useNavigation();
    const onPressHandler = () => {
        inactive = (props.seen === "no" ? "Không hoạt động" : "Đang hoạt động");
        navigation.navigate('MessLine', {user: props.user, inactive: inactive, mess: props.mess})
    }
    if (props.seen === "yes") {
        return (
            <Pressable 
                style={styles.chat}
                android_ripple={{color:"rgba(217, 217, 217, 0.3)"}}
                onPress={onPressHandler}
            >
                <Image 
                    style={styles.avatar}
                    resizeMode="cover"
                    source={require("../assets/avatar.png")}
                />
                <Image 
                    style={styles.active}
                    resizeMode="cover"
                    source={require("../assets/active.png")}
                />
                <Text style={styles.username}>{props.user}</Text>
                <Text style={styles.mess}>{props.mess}</Text>
                <Text style={styles.time}>{props.time}</Text>
            </Pressable>
        );
    }
    else if (props.seen === "no") {
        return (
            <Pressable 
                style={styles.chat}
                android_ripple={{color:"rgba(217, 217, 217, 0.3)"}}
                onPress={onPressHandler}
            >
                <Image 
                    style={styles.avatar1}
                    resizeMode="cover"
                    source={require("../assets/avatar.png")}
                />
                <Text style={styles.username1}>{props.user}</Text>
                <Text style={styles.mess1}>{props.mess}</Text>
                <Text style={styles.time1}>{props.time}</Text>
            </Pressable>
        );
    }
    
}
const styles = StyleSheet.create({
    avatar: {
        position: 'absolute',
        height: "80%",
        width: "13%",
        left: "4%",
        top: "10%",
    },
    avatar1: {
        position: 'absolute',
        height: "80%",
        width: "13%",
        left: "4%",
        top: "10%",
        opacity: 0.4
    },
    active: {
        width: 15,
        height: 15,
        position: 'absolute',
        bottom: 5,
        left: 58,
    },  
    username: {
        position: 'absolute',
        left: "25%",
        fontSize: 20,
        top: "10%"
    },
    username1: {
        position: 'absolute',
        left: "25%",
        fontSize: 20,
        top: "10%",
        fontWeight: 'bold',
    },
    mess: {
        position: 'absolute',
        left: "25%",
        fontSize: 12,
        bottom: "10%",
    },
    mess1: {
        position: 'absolute',
        left: "25%",
        fontSize: 12,
        bottom: "10%",
        fontWeight: 'bold',
    },
    time: {
        position: 'absolute',
        right: "10%",
        fontSize: 12,
        bottom: "10%",
    },
    time1: {
        position: 'absolute',
        right: "10%",
        fontSize: 12,
        bottom: "10%",
        fontWeight: 'bold',
    },
    chat: {
        width: "100%",
        height: 70,
    }
})
export default Message;