import React, {useState, useEffect} from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import {Calendar, CalendarList} from 'react-native-calendars'

function HomeScreen() {
    return (
        <>
        <Header 
            name="Trang chủ"
        />
        <View style={styles.body}>
            <Text style={styles.text}>Work Calendar</Text>
            <View style={styles.imageContain}>
                <CalendarList 
                    horizontal={true}
                    style={styles.calendar}
                    enableSwipeMonths={true}
                    markedDates={{
                        '2022-11-01': {marked: true},
                        '2022-11-03': {marked: true},
                        '2022-11-09': {marked: true},
                        '2022-11-18': {marked: true}
                    }}
                />
            </View>
            <Text style={styles.text1}>Tin tức</Text>
            <View style={styles.list}>
                <Pressable>
                    <Image style={styles.circle}
                        source={require("../assets/checked.png")} 
                    />
                </Pressable>
                <Pressable>
                    <Image style={styles.circle}
                        source={require("../assets/unchecked.png")} 
                    />
                </Pressable>
                <Pressable>
                    <Image style={styles.circle}
                        source={require("../assets/unchecked.png")} 
                    />
                </Pressable>
                <Pressable>
                    <Image style={styles.circle}
                        source={require("../assets/unchecked.png")} 
                    />
                </Pressable>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        flexGrow: 1,
        fontSize: 24,
        margin: 10,
    },
    text1: {
        flexGrow: 1,
        textAlign: 'right',
        fontSize: 24,
        margin: 10,
    },
    calendar: {
        flexGrow: 25,
        width: "100%",
    },
    circle: {
        marginLeft: 15,
        height: 20,
        width: 20,
    },
    list: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
})
export default HomeScreen;