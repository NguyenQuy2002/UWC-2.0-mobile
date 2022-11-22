import React from 'react';
import { StyleSheet, TextInput, View, Image} from 'react-native';
import Header from '../../components/Header';
import Message from '../../components/Message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import MessLine from '../Chat/MessLine'

const Stack = createStackNavigator()

export default function ChatScreen(props) {
    return (
        <View style={styles.body}>
            <Header 
                name="Chat"
            />
            <View style={styles.container}>  
                <MaterialCommunityIcons
                    style={styles.search}
                    name="magnify"
                    size={17}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Search'
                />
            </View>
            
            <View style={styles.main}>
                <Message 
                    user="Thông báo MCP"
                    mess="MCP 1 đã đầy, đề nghị nh..."
                    time="10:39"
                    seen="no"
                />
                <Message 
                    user="Phú Quý"
                    mess="Không nha"
                    time="9:39"
                    seen="no"
                />
                <Message 
                    user="Nguyễn Văn A"
                    mess="Để anh làm cho"
                    time="4:01"
                    seen="yes"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "stretch"
    },
    header: {
        flexGrow: 2,
        flexShrink: 0,
    },
    container: {
        flexGrow: 1,
        flexShrink: 0,
        width: "90%",
        flexDirection: 'row',
        alignSelf: "center",
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 15,
    },
    main: {
        flexGrow: 50,
        flexShrink: 0,
    },
    input: {
        width: "100%",
        height: 30,
    },
    search: {
        marginLeft: 10,
        marginRight: 10,
    }, 
})

