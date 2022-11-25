import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import {
	FlatList,
	Image,
	Pressable,
	SectionList,
	StyleSheet,
	Text,
	View
} from 'react-native';
const Stack = createStackNavigator();

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'Nhiệm vụ 1',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Nhiệm vụ 2',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Nhiệm vụ 3',
	},
];

const Item = ({ title }) => {
	const navigation = useNavigation();
	const onPressHandler = () => {
		navigation.navigate('TaskDetail', {
			ID: title.ID,
			checkin: title.checkin,
			checkout: title.checkout,
			MCP: title.MCP,
		});
	};

	return (
		<Pressable onPress={onPressHandler}>
			<View style={styles.item}>
				<Text style={styles.title}>{title.name}</Text>
				<Image
					style={styles.image}
					source={require('../../assets/next.png')}
				/>
			</View>
		</Pressable>
	);
};

const SectionData = ({ title }) => {
	const [year, month, day] = title.split('-');
	var myDate = new Date(title);
	return (
		<View style={styles.section}>
			<Text style={styles.day}>{day}</Text>
			<View>
				<Text style={styles.monthyear}>
					{myDate.getDay() === 0
						? 'Chủ nhật'
						: `Thứ ${myDate.getDay() + 1}`}
				</Text>
				<Text style={styles.monthyear}>
					tháng {month} {year}
				</Text>
			</View>
		</View>
	);
};

class User {
	constructor(Task) {
		this.Task = Task;
	}
}
const UserConverter = {
	toFirestore: (user) => {
		return {
			Task: user.Task,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new User(data.Task);
	},
};

export function MonthlyTask() {
	const [task, setTask] = useState([]);
	const db = getFirestore();
	const uid = getAuth().currentUser.uid;
	getDoc(doc(db, 'users', uid)).then((docSnap) => {
		if (docSnap.exists()) {
			setTask(docSnap.data().Task);
		}
	});
	return (
		<SectionList
			sections={task}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <Item title={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<SectionData title={title} />
			)}
		/>
	);
}

export function WeeklyTask() {
	return (
		<SectionList
			sections={DATA2}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <Item title={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<SectionData title={title} />
			)}
		/>
	);
}

export function DailyTask() {
	return (
		<View style={styles.body}>
			<FlatList
				style={{ width: '100%' }}
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	body: {
		marginTop: 20,
	},
	item: {
		backgroundColor: '#fff',
		width: '100%',
		height: 85,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
	},
	image: {
		width: 24,
		height: 28,
	},
	title: {
		width: '90%',
		height: '100%',
		fontSize: 24,
		textAlign: 'center',
		paddingRight: 90,
	},
	section: {
		width: '100%',
		height: 72,
		backgroundColor: 'rgba(11, 204, 148, 0.7)',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		marginTop: 16,
	},
	day: {
		fontSize: 32,
		width: '20%',
		height: '100%',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontWeight: 'bold',
	},
	monthyear: {
		fontSize: 16,
	},
});
