import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Message({user, avatar, messageText, messageTime, seen}) {
    var inactive;
    const navigation = useNavigation();
    const onPressHandler = () => {
        inactive = (seen === "no" ? "Không hoạt động" : "Đang hoạt động");
        navigation.navigate('MessLine', {user: user, inactive: inactive, mess: messageText})
    }
    if (seen === "yes") {
        return (
            <Pressable 
                style={styles.chat}
                android_ripple={{color:"rgba(217, 217, 217, 0.3)"}}
                onPress={onPressHandler}
            >
                <Image 
                    style={styles.avatar}
                    resizeMode="cover"
                    source={avatar}
                />
                <Image 
                    style={styles.active}
                    resizeMode="cover"
                    source={require("../assets/active.png")}
                />
                <Text style={styles.username}>{user}</Text>
                <Text style={styles.mess}>{messageText.slice(0, 25)}...</Text>
                <Text style={styles.time}>{messageTime}</Text>
            </Pressable>
        );
    }
    else if (seen === "no") {
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
                <Text style={styles.username1}>{user}</Text>
                <Text style={styles.mess1}>{messageText.slice(0, 25)}...</Text>
                <Text style={styles.time1}>{messageTime}</Text>
            </Pressable>
        );
    }
    
}
const styles = StyleSheet.create({
    avatar: {
        position: 'absolute',
        height: "80%",
        width: "15%",
        left: "4%",
        top: "10%",
    },
    avatar1: {
        position: 'absolute',
        height: "80%",
        width: "15%",
        left: "4%",
        top: "10%",
        opacity: 0.4
    },
    active: {
        width: 15,
        height: 15,
        position: 'absolute',
        bottom: 5,
        left: 65,
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
        fontSize: 14,
        bottom: "10%",
    },
    mess1: {
        position: 'absolute',
        left: "25%",
        fontSize: 14,
        bottom: "10%",
        fontWeight: 'bold',
    },
    time: {
        position: 'absolute',
        right: "5%",
        fontSize: 14,
        top: "15%",
    },
    time1: {
        position: 'absolute',
        right: "3%",
        fontSize: 14,
        top: "15%",
        fontWeight: 'bold',
    },
    chat: {
        width: "100%",
        height: 70,
    }
})
export default Message;