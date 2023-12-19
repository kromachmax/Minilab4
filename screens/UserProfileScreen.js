import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase';

const UserProfileScreen = ({ navigation }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setUserData({
                name: currentUser.displayName,
                email: currentUser.email,
                photoURL: currentUser.photoURL,
            });
        }
    }, []);

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Профиль",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerRight: () => (
                <View style={{ marginRight: 20 }}>
                    <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
                        <Ionicons name='exit' size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                source={{ uri: userData?.photoURL }}
                size="xlarge"
                containerStyle={styles.avatarContainer}
            />
            <Text style={styles.text}>Имя: {userData?.name}</Text>
            <Text style={styles.text}>Email: {userData?.email}</Text>
        </View>
    );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    avatarContainer: {
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});
