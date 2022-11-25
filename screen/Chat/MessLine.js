import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
	Image,
	ScrollView,
	View,
	StyleSheet,
	Text,
	Pressable,
	StatusBar,
	TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MessageReceive({ mess }) {
	return (
		<View style={styles.message}>
			<View style={styles.container}>
				<Image
					style={styles.avatar}
					source={require('../../assets/avatar.png')}
				/>
				<Image
					style={styles.active1}
					source={require('../../assets/active.png')}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>{mess}</Text>
			</View>
		</View>
	);
}

function MessageSend({ mess }) {
	return (
		<View style={styles.message1}>
			<View style={[styles.textContainer, { backgroundColor: '#37f' }]}>
				<Text style={styles.text}>{mess}</Text>
			</View>
		</View>
	);
}

function MessLine({ route }) {
	const { user, inactive, mess } = route.params;
	const [message, setMessage] = useState('');
	const navigation = useNavigation();
	const onPressBack = () => {
		navigation.goBack();
	};
	const onSendMessage = () => {
		return <MessageSend mess={message}/>
	};
	return (
		<View style={styles.body}>
			<View style={styles.header}>
				<Pressable
					style={styles.button}
					onPress={onPressBack}>
					<Image
						style={styles.goback}
						source={require('../../assets/goback.png')}
					/>
				</Pressable>
				<View style={styles.user}>
					<Image
						style={styles.avatar}
						source={require('../../assets/avatar.png')}
					/>
					{inactive === 'Đang hoạt động' ? (
						<Image
							style={styles.active}
							source={require('../../assets/active.png')}
						/>
					) : null}
				</View>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{user}</Text>
					<Text style={styles.status}>{inactive}</Text>
				</View>
			</View>
			<ScrollView style={styles.main}>
				<MessageReceive mess='Hôm nay làm dùm tui ca này được không vậy Quý' />
				<MessageSend mess='okk, 0967514105 momo 200k dùm nha bạn A' />
				<MessageReceive mess={mess} />
			</ScrollView>
			<View style={styles.footer}>
				<Image
					style={styles.add}
					source={require('../../assets/add.png')}
				/>
				<View style={styles.inputbar}>
					<TextInput
						style={styles.input}
						placeholder='Soạn tin...'
						value={message}
						onChangeText={(message) => setMessage(message)}
					/>
					<Image
						style={styles.emoticon}
						source={require('../../assets/emoticon.png')}
					/>
				</View>
				<Pressable onPress={onSendMessage}>
					<MaterialCommunityIcons
						style={styles.add}
						name='send'
						size={30}
					/>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'column',
	},
	header: {
		flexGrow: 1,
		flexShrink: 0,
		backgroundColor: 'rgba(11, 204, 148, 0.35)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	main: {
		flexGrow: 50,
		flexShrink: 0,
		backgroundColor: '#fff',
	},
	footer: {
		flexGrow: 1,
		flexShrink: 0,
		backgroundColor: 'yellow',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(11, 204, 148, 0.35)',
	},
	goback: {
		width: 32,
		height: 32,
	},
	button: {
		flex: 1,
		marginLeft: 10,
	},
	user: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	avatar: {
		height: 45,
		width: 45,
	},
	active: {
		position: 'absolute',
		right: 0,
		height: 15,
		width: 15,
	},
	nameContainer: {
		flex: 5,
		marginLeft: 10,
		justifyContent: 'space-evenly',
		padding: 5,
	},
	name: {
		fontSize: 20,
	},
	status: {
		fontSize: 12,
	},
	add: {
		width: 29,
		height: 28,
		margin: '3%',
	},
	inputbar: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.4)',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emoticon: {
		height: 24,
		width: 24,
	},
	input: {
		flex: 1,
	},
	message: {
		flexDirection: 'row',
		width: 240,
		minHeight: 50,
		marginVertical: 6,
		marginHorizontal: 12,
		alignItems: 'center',
	},
	message1: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		width: 240,
		minHeight: 50,
		marginVertical: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		maxHeight: '100%',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	active1: {
		height: 15,
		width: 15,
		position: 'absolute',
		left: 35,
	},
	textContainer: {
		maxHeight: '100%',
		maxWidth: 250,
		backgroundColor: 'rgba(217, 217, 217, 0.4)',
		borderRadius: 20,
		margin: 10,
		padding: 10,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
	},
});

export default MessLine;
