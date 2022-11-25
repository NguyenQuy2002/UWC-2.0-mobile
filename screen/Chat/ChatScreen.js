import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import Message from '../../components/Message';

const Data = [
	{
		id: 1,
		userName: 'John Doe',
		userImg: require('../../assets/avatar.png'),
		messageTime: '4 mins ago',
		messageText: 'Hey there, this is a message from MCP.',
	},
	{
		id: 2,
		userName: 'Jenny Doe',
		userImg: require('../../assets/avatar.png'),
		messageTime: '4 mins ago',
		messageText: 'Hey there, this is a message from MCP.',
	},
	{
		id: 3,
		userName: 'Lady Doe',
		userImg: require('../../assets/avatar.png'),
		messageTime: '4 mins ago',
		messageText: 'Hey there, this is a message from MCP.',
	},
	{
		id: 4,
		userName: 'Moll Doe',
		userImg: require('../../assets/avatar.png'),
		messageTime: '4 mins ago',
		messageText: 'Hey there, this is a message from MCP.',
	},
];

export default function ChatScreen(props) {
	return (
		<View style={styles.body}>
			<Header name='Chat' />
			<View style={styles.container}>
				<MaterialCommunityIcons
					style={styles.search}
					name='magnify'
					size={17}
				/>
				<TextInput
					style={styles.input}
					placeholder='Search'
				/>
			</View>

			<FlatList
				style={styles.main}
				data={Data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Message
						user={item.userName}
						avatar={item.userImg}
						messageText={item.messageText}
						messageTime={item.messageTime}
						seen='yes'
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	container: {
		width: '90%',
		flexDirection: 'row',
		alignSelf: 'center',
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
		width: '100%',
		height: 30,
	},
	search: {
		marginLeft: 10,
		marginRight: 10,
	},
});
