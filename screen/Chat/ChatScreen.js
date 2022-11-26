import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, getDocs, collection, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text } from 'react-native';
import Header from '../../components/Header';

function ChatScreen(props) {
	const [contact, setContact] = useState([]);
	const navigation = useNavigation();
	const auth = getAuth();
	const db = getFirestore();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				getDocs(collection(db, 'users')).then((querySnapshot) => {
					const tempContact = [];
					querySnapshot.forEach((doc) => {
						if (doc.id != uid) {
							tempContact.push({
								id: doc.id,
								name: doc.data().name,
								email: doc.data().email,
							});
						}
					});
					setContact(tempContact);
				});
			}
		});
	}, []);
	return (
		<>
			<Header name='Trò chuyện' />
			<FlatList
				style={styles.list}
				data={contact}
				keyExtractor={(item) => item.email}
				renderItem={({ item }) => {
					return (
						<Pressable
							style={styles.contact}
							android_ripple={{ color: 'gray' }}
							onPress={() =>
								navigation.navigate('MessLine', {
									item,
								})
							}>
							<Image
								style={styles.avatar}
								source={require('../../assets/avatar.png')}
							/>
							<Text style={{ fontSize: 20 }}>{item.name}</Text>
						</Pressable>
					);
				}}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	list: {
		width: '100%',
		height: 600,
		marginTop: 30,
	},
	contact: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderTopWidth: 1,
		backgroundColor: '#d9d9d9',
	},
	avatar: {
		width: 48,
		height: 48,
		marginHorizontal: 15,
	},
});

export default ChatScreen;
