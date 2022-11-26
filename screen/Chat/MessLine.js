import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import {
	addDoc,
	collection,
	getFirestore,
	query,
	orderBy,
	onSnapshot,
} from 'firebase/firestore';
import React, {
	useCallback,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MessLine({ route }) {
	const { user, inactive } = route.params;
	const [messages, setMessages] = useState([]);
	const navigation = useNavigation();

	useLayoutEffect(() => {
		const collectionRef = collection(getFirestore(), 'messages');
		const q = query(collectionRef, orderBy('createdAt', 'desc'));

		const unsubscribe = onSnapshot(q, (snapshot) => {
			console.log('snapshot');
			setMessages(
				snapshot.docs.map((doc) => ({
					_id: doc.id,
					text: doc.data().text,
					createdAt: doc.data().createdAt.toDate(),
					user: doc.data().user,
				}))
			);
		});
		return unsubscribe;
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
		const { _id, createdAt, text, user } = messages[0];
		addDoc(collection(getFirestore(), 'messages'), {
			_id,
			createdAt,
			text,
			user,
		});
	}, []);

	const renderSend = (props) => {
		return (
			<Send {...props}>
				<View>
					<MaterialCommunityIcons
						name='send'
						style={{ marginBottom: 5, marginRight: 5 }}
						size={32}
						color='#2e64e5'
					/>
				</View>
			</Send>
		);
	};

	const renderBubble = (props) => {
		return (
			<Bubble
				{...props}
				wrapperStyle={{
					right: {
						backgroundColor: '#2e64e5',
					},
				}}
			/>
		);
	};

	const scrollToBottomComponent = () => {
		return (
			<MaterialCommunityIcons
				name='chevron-double-down'
				size={22}
				color='#333'
			/>
		);
	};

	return (
		<>
			<View style={styles.header}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.goBack()}>
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
			<GiftedChat
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: getAuth().currentUser.email,
					avatar: 'https://placeimg.com/140/140/any',
				}}
				showAvatarForEveryMessage={true}
				alwaysShowSend
				renderSend={renderSend}
				renderBubble={renderBubble}
				scrollToBottom
				scrollToBottomComponent={scrollToBottomComponent}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 72,
		backgroundColor: 'rgba(11, 204, 148, 0.35)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	goback: {
		width: 32,
		height: 32,
		margin: 15,
	},
	user: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginRight: 10,
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
		height: '100%',
		justifyContent: 'center',
		margin: 10,
	},
	name: {
		fontSize: 18,
	},
	status: {
		fontSize: 12,
	},
});

export default MessLine;
