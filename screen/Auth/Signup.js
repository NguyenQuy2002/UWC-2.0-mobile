import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import InputBar from './InputBar';
import LoginButton from './LoginButton';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import auth from "../../firebaseConfig"

function Signup(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm_password, setConfirmPassword] = useState('');
	const navigation = useNavigation();
	const onPressHandler = () => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
		if (reg.test(email) === false) {
			Alert.alert('Invalid email');
		}
		if (password.length <= 6) {
			Alert.alert('The password should be more than 6 letters');
		} else if (password !== confirm_password) {
			Alert.alert('The confirm password is not correct');
		} else {
            createUserWithEmailAndPassword(getAuth(), email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigation.navigate('Login');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
			
		}
	};
	return (
		<View style={styles.body}>
			<Header name="Sign up" />
			<InputBar
				value={email}
				onChangeText={(email) => setEmail(email)}
				placeholder="Email"
				secureTextEntry={false}
			/>
			<InputBar
				value={password}
				onChangeText={(password) => setPassword(password)}
				placeholder="Password"
				secureTextEntry={true}
			/>
			<InputBar
				value={confirm_password}
				onChangeText={(confirm_password) =>
					setConfirmPassword(confirm_password)
				}
				placeholder="Confirm Password"
				secureTextEntry={true}
			/>
			<LoginButton
				name="Sign up"
				type="PRIMARY"
				onPress={onPressHandler}
			/>
			<Text style={styles.text}>
				Have an account?
				<Text
					onPress={onPressHandler}
					style={styles.signup}>
					{' '}
					Log in{' '}
				</Text>
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	body: {
		alignItems: 'center',
		padding: 20,
	},
	text: {
		marginTop: 70,
		fontSize: 14,
		textAlignVertical: 'center',
	},
	signup: {
		color: '#37b',
		fontWeight: 'bold',
		justifyContent: 'center',
	},
});
export default Signup;
